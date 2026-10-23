# EduFlow School ERP - Scrollytelling Landing Page

A high-end scrollytelling landing page for the EduFlow School ERP product, built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Smooth scroll-linked animation** that plays an image sequence of the product visually exploding and reassembling
- **Canvas-based rendering** for optimal performance
- **Responsive design** that works on all devices
- **Dark mode** with a sleek, modern aesthetic
- **Animated text overlays** that tell the product story
- **Loading states** with smooth transitions
- **Progress indicators** for better UX

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Rendering**: HTML5 Canvas

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Navigate to the landing directory:
   ```bash
   cd landing
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create the frames directory and add your image sequence:
   ```bash
   mkdir -p public/frames
   ```

4. Add your frame images to `public/frames/` with the naming convention:
   - `erp-frame_0.webp`
   - `erp-frame_1.webp`
   - ...
   - `erp-frame_119.webp` (for 120 frames)

   **Important**: All frames must have the same dimensions and a consistent background color (#050505 by default).

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm run start
# or
yarn start
```

## Configuration

Edit the following variables in `src/app/page.tsx` to customize your experience:

```typescript
// Configuration
const FRAME_COUNT = 120;           // Number of frames in your sequence
const FRAME_PREFIX = "erp-frame";   // Prefix for frame filenames
const BACKGROUND_COLOR = "#050505"; // Background color (must match your frames)
```

### Customizing Text Content

Modify the `scrollContent` array in `src/app/page.tsx` to change the text that appears at different scroll positions:

```typescript
const scrollContent = [
  {
    position: 0,        // Scroll position (0 = top, 1 = bottom)
    alignment: "center", // "left" | "right" | "center"
    headline: "Your Headline",
    subtitle: "Your Subtitle",
    description: "Your description text",
    cta: "Call to Action" // Optional
  },
  // Add more sections as needed
];
```

## Image Sequence Generation

To create your image sequence, you can use tools like:

1. **Blender** - For 3D product animations
2. **After Effects** - For 2D animations with camera moves
3. **Figma + Plugins** - For simpler transitions
4. **AI Tools** - Midjourney, DALL-E, or Stable Diffusion with image-to-image

### Recommended Settings

- **Resolution**: 1920x1080 (Full HD) or higher
- **Format**: WebP (for optimal size/quality)
- **Frame Rate**: 30fps (for 4-second animation = 120 frames)
- **Background**: Solid color (#050505 or your chosen color)
- **Naming**: `prefix_0.webp`, `prefix_1.webp`, etc.

### Generating Frames with AI

Use the following prompts for generating your start and end frames:

**Start Frame (Assembled Product):**
```
Ultra-premium product photography of a sleek school ERP dashboard interface 
called "EduFlow School ERP" placed on a matte black surface, minimalistic studio 
photoshoot. Pure black (#050505) background with subtle gradient falloff, soft 
rim lighting outlining the clean UI edges and modern design, controlled 
reflections on glass and matte textures. Cinematic lighting, high contrast, 
luxury tech aesthetic, sharp focus, shallow depth of field. No clutter, no text, 
no logos. Shot with a professional DSLR, 85mm lens, f/1.8, ultra-high resolution, 
photorealistic, Apple-level product shoot, dramatic mood, modern and elegant.
```

**End Frame (Exploded View):**
```
Exploded technical diagram view of EduFlow School ERP platform, every component 
precisely separated and floating in perfect alignment, suspended in mid-air 
against a pure black (#050505) studio background. Visible internal structure 
including database layers, API endpoints, UI components, authentication modules, 
and data flow connections, clearly showing how the product is assembled. 
Hyper-realistic product visualization, ultra-sharp focus, studio rim lighting 
identical to hero image, soft highlights tracing each component, controlled 
reflections on matte and glass surfaces. Cinematic lighting, high contrast, 
luxury tech engineering aesthetic. No labels, no annotations, no text. 
Photorealistic, ultra-high resolution, Apple-style industrial design render, 
dramatic and clean.
```

## Project Structure

```
landing/
├── public/
│   └── frames/              # Your frame images go here
│       ├── erp-frame_0.webp
│       ├── erp-frame_1.webp
│       └── ...
├── src/
│   └── app/
│       ├── globals.css      # Global styles with Tailwind
│       ├── layout.tsx       # Root layout
│       ├── page.tsx         # Main landing page
│       └── ScrollCanvas.tsx # Canvas scroll component
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Customization Tips

### Changing Colors

1. Update `BACKGROUND_COLOR` in `page.tsx`
2. Update the background in `globals.css`
3. Ensure your frame images match the new background color

### Changing Typography

1. Update the font in `layout.tsx` (currently using Inter)
2. Add new fonts to `tailwind.config.ts`

### Performance Optimization

- Use WebP format for frames (best compression)
- Keep frame count reasonable (60-120 for smooth animation)
- Optimize image sizes (target 200-500KB per frame)
- Consider lazy loading for very long sequences

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

Note: Canvas performance may vary on mobile devices. The component includes responsive scaling to ensure a good experience on all screen sizes.

## License

This project is part of the EduFlow School ERP marketing materials.

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
