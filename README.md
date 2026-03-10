# NovexOS Website

A modern, immersive website for NovexOS - built with Next.js, Three.js, and Framer Motion.

## 🚀 Features

- **3D Hero Section**: Interactive Three.js scene with particle effects and rotating core
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion for seamless page transitions
- **Cyber-tech Aesthetic**: Retro-futuristic design with neon accents and glitch effects
- **Static Export**: Optimized for Cloudflare Pages deployment

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Fonts**: Orbitron (display) & Space Mono (body)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

The site will be available at `http://localhost:3000`

## 🌐 Deployment on Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. Push this repository to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to **Workers & Pages** → **Create application** → **Pages**
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: 18 or later
6. Click **Save and Deploy**

### Method 2: Direct Upload

```bash
# Build and export the site
npm run build

# Install Wrangler CLI (if not already installed)
npm install -g wrangler

# Deploy to Cloudflare Pages
wrangler pages deploy out --project-name=novexos
```

### Environment Variables

No environment variables are required for this project.

## 📁 Project Structure

```
novexos-website/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main page (home)
│   └── globals.css        # Global styles with custom animations
├── components/
│   ├── Hero3D.js          # 3D hero section with Three.js
│   ├── Features.js        # Features showcase
│   ├── Roadmap.js         # Development roadmap
│   ├── Download.js        # Download section
│   └── Footer.js          # Site footer
├── public/                # Static assets
├── package.json
├── next.config.js         # Next.js config (static export)
├── tailwind.config.js     # Tailwind CSS config
└── README.md
```

## 🎨 Design Philosophy

The website follows a **retro-futuristic cyber-tech aesthetic** to reflect NovexOS's custom-built nature:

- **Typography**: Orbitron for headers (bold, geometric), Space Mono for body (technical, monospace)
- **Colors**: Dark background (#0a0a0f) with neon accents (cyan, purple, pink, green)
- **Effects**: Glitch animations, neon glows, scan lines, particle fields, grain overlay
- **Layout**: Asymmetric compositions with generous spacing

## 🔧 Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:

```js
colors: {
  'cyber-black': '#0a0a0f',
  'cyber-blue': '#00d4ff',
  'cyber-purple': '#6c63ff',
  'cyber-pink': '#ff006e',
  'cyber-green': '#00ff9f',
}
```

### 3D Scene

Modify `components/Hero3D.js` to customize the Three.js scene (particles, shapes, colors, animations).

### Animations

Adjust Framer Motion settings in individual components for different animation timings and effects.

## 📄 License

This website is created for NovexOS by Omega Developments.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- **Website**: [omegadevelopmentsfr.dpdns.org](https://omegadevelopmentsfr.dpdns.org)
- **Email**: omegadevelopmentsfr@gmail.com
- **GitHub**: [@omegadevelopmentsfr](https://github.com/omegadevelopmentsfr)

---

Built with ⚡ by Omega Developments
