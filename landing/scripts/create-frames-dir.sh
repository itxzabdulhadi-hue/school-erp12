#!/bin/bash

# Script to create the frames directory structure
# Run this after generating your frame images

# Create the public/frames directory
mkdir -p public/frames

# Create a placeholder README for the frames directory
cat > public/frames/README.md << 'EOF'
# Frame Images

Place your image sequence here with the following naming convention:

- erp-frame_0.webp
- erp-frame_1.webp
- erp-frame_2.webp
- ...
- erp-frame_119.webp (for 120 frames)

## Requirements:
- All frames must be the same dimensions
- Background color must be #050505 (or match your BACKGROUND_COLOR config)
- WebP format recommended for optimal size/quality
- Frame count must match FRAME_COUNT in page.tsx

## Generating Frames:

1. Use AI tools (Midjourney, DALL-E, Stable Diffusion) to generate start and end frames
2. Use an image splitter or video frame extractor to create intermediate frames
3. Or use Blender/After Effects to render your animation sequence
4. Convert all frames to WebP format
5. Name them sequentially: {prefix}_{index}.webp

## Example (using FFmpeg to extract frames from video):

```bash
# If you have a video of your animation
ffmpeg -i animation.mp4 -vf "fps=30,scale=1920:1080" public/frames/erp-frame_%03d.webp
```

## Example (using ImageMagick to resize existing frames):

```bash
# Resize all frames to 1920x1080
mogrify -resize 1920x1080 -quality 80 -path public/frames public/frames/*.webp
```
EOF

echo "✅ Frames directory created at public/frames/"
echo "✅ README.md created with instructions"
echo ""
echo "Next steps:"
echo "1. Add your frame images to public/frames/"
echo "2. Name them: erp-frame_0.webp, erp-frame_1.webp, etc."
echo "3. Run 'npm run dev' to see your animation"
