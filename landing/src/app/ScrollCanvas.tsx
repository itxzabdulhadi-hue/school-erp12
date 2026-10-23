"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";

interface ScrollCanvasProps {
  frameCount: number;
  framePrefix: string;
  backgroundColor?: string;
}

export default function ScrollCanvas({
  frameCount,
  framePrefix,
  backgroundColor = "#050505",
}: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Animation state
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  // Frame state for canvas drawing
  const currentFrameIndex = useMotionValue(0);

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadedImages: HTMLImageElement[] = [];
        
        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.src = `/frames/${framePrefix}_${i}.webp`;
          
          // Wait for image to load
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = () => reject(new Error(`Failed to load frame ${i}`));
          });
          
          loadedImages.push(img);
        }
        
        setImages(loadedImages);
        setLoaded(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load frames");
        console.error("Error loading frames:", err);
      }
    };

    loadImages();
  }, [frameCount, framePrefix]);

  // Draw current frame to canvas
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images.length) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas with background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate which frame to draw (clamp to valid range)
    const clampedIndex = Math.min(Math.max(0, Math.floor(index)), images.length - 1);
    const img = images[clampedIndex];

    if (img) {
      // Draw image centered and scaled to fit
      const aspectRatio = img.width / img.height;
      const canvasAspect = canvas.width / canvas.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (aspectRatio > canvasAspect) {
        // Image is wider than canvas
        drawHeight = canvas.width / aspectRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        // Image is taller than canvas
        drawWidth = canvas.height * aspectRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, [images, backgroundColor]);

  // Update canvas on frame index change
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      currentFrameIndex.set(latest);
      drawFrame(latest);
    });

    return () => unsubscribe();
  }, [frameIndex, drawFrame, currentFrameIndex]);

  // Handle canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      
      // Redraw current frame
      drawFrame(currentFrameIndex.get());
    };

    // Initial setup
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame, currentFrameIndex]);

  // Initial draw when images load
  useEffect(() => {
    if (loaded && images.length > 0) {
      drawFrame(0);
    }
  }, [loaded, images.length, drawFrame]);

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#050505] text-white/60 z-50">
        <div className="text-center">
          <p className="text-xl mb-4">Error loading animation</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#050505] z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
          <p className="text-white/60 text-sm tracking-wider">Loading Animation...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.canvas
      ref={canvasRef}
      className="sticky top-0 h-screen w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}
