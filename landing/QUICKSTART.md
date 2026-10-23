# 🚀 Quick Start Guide

Get your EduFlow School ERP scrollytelling landing page running in 5 minutes!

## Step 1: Navigate to the Landing Directory

```bash
cd /home/user/school-erp12/landing
```

## Step 2: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Framer Motion
- Tailwind CSS
- TypeScript

## Step 3: Create Frames Directory

```bash
# Option A: Manual creation
mkdir -p public/frames

# Option B: Use the helper script
./scripts/create-frames-dir.sh
```

## Step 4: Add Your Frame Images

Copy your 120 frame images to `public/frames/` with these exact names:
```
erp-frame_0.webp
erp-frame_1.webp
erp-frame_2.webp
...
erp-frame_119.webp
```

**Don't have frames yet?** Use the AI prompts in `IMPLEMENTATION_SUMMARY.md` to generate them!

## Step 5: Run the Development Server

```bash
npm run dev
```

Your landing page will be available at: **http://localhost:3000**

## Step 6: Customize (Optional)

Edit `src/app/page.tsx` to customize:
- Brand name
- Text content
- Scroll positions
- Colors

## Step 7: Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Options
- Netlify: `netlify deploy`
- AWS Amplify: Connect your GitHub repo
- Any Node.js hosting

## 🎯 Pro Tips

1. **Frame Generation**: Use Midjourney or DALL-E with the provided prompts
2. **Frame Splitting**: Use tools like:
   - FFmpeg for video → frames
   - ImageMagick for batch processing
   - Online image splitters
3. **Optimization**: Compress WebP images to ~200-500KB each
4. **Testing**: Test on mobile to ensure smooth performance

## 📊 What You'll See

✅ Smooth scroll animation of your product exploding and reassembling
✅ Four text sections that fade in/out at different scroll positions
✅ Loading spinner while frames load
✅ Scroll progress indicator
✅ Scroll-down arrow for first-time users
✅ Responsive design on all devices

## 🔧 Troubleshooting

### Frames not loading?
- Check that all frames are in `public/frames/`
- Verify frame names match `erp-frame_{index}.webp`
- Ensure frame count matches `FRAME_COUNT` in page.tsx

### Animation is choppy?
- Reduce frame count (try 60 instead of 120)
- Compress your WebP images
- Test on a more powerful device

### Background doesn't match?
- Update `BACKGROUND_COLOR` in page.tsx
- Regenerate frames with matching background

## 📚 Learn More

- Full documentation: `README.md`
- Implementation details: `IMPLEMENTATION_SUMMARY.md`
- Next.js docs: https://nextjs.org/docs
- Framer Motion docs: https://www.framer.com/motion/
- Tailwind CSS docs: https://tailwindcss.com/docs

---

**Happy coding! 🎨**
