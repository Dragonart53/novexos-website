# 🚀 Guide de Démarrage Rapide - Site NovexOS

## 📋 Prérequis

- Node.js 18 ou supérieur
- npm ou yarn

## 🏃 Installation et Lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🌐 Déploiement sur Cloudflare Pages

### Option 1 : Via GitHub (Recommandé)

1. Poussez ce projet sur GitHub
2. Allez sur [Cloudflare Dashboard](https://dash.cloudflare.com)
3. **Workers & Pages** → **Create application** → **Pages**
4. Connectez votre repo GitHub
5. Configuration :
   - **Build command** : `npm run build`
   - **Build output directory** : `out`
   - **Node version** : 18+
6. Cliquez sur **Save and Deploy**

### Option 2 : Déploiement Direct

```bash
# 1. Construire le site
npm run build

# 2. Installer Wrangler CLI
npm install -g wrangler

# 3. Se connecter à Cloudflare
wrangler login

# 4. Déployer
wrangler pages deploy out --project-name=novexos
```

## 🎨 Personnalisation

### Couleurs
Modifiez `tailwind.config.js` pour changer la palette :

```js
colors: {
  'cyber-black': '#0a0a0f',    // Fond principal
  'cyber-blue': '#00d4ff',     // Accent bleu
  'cyber-purple': '#6c63ff',   // Accent violet
  'cyber-pink': '#ff006e',     // Accent rose
  'cyber-green': '#00ff9f',    // Accent vert
}
```

### Contenu
- **Hero** : `components/Hero3D.js`
- **Features** : `components/Features.js`
- **Roadmap** : `components/Roadmap.js`
- **Download** : `components/Download.js`

### Scène 3D
Modifiez `components/Hero3D.js` pour personnaliser :
- Nombre de particules
- Couleurs des anneaux
- Vitesse d'animation
- Forme centrale

## 📁 Structure

```
novexos-website/
├── app/
│   ├── layout.js       # Layout principal
│   ├── page.js         # Page d'accueil
│   └── globals.css     # Styles globaux
├── components/         # Composants React
├── public/            # Assets statiques
└── package.json
```

## 🛠️ Commandes Utiles

```bash
npm run dev      # Développement
npm run build    # Build production
npm run export   # Export statique
```

## 💡 Fonctionnalités

✅ Scène 3D interactive avec Three.js
✅ Animations fluides avec Framer Motion
✅ Design responsive
✅ Effets cyber-tech (glitch, néon, scan lines)
✅ Export statique pour Cloudflare Pages
✅ Performance optimisée

## 🎯 Performance

Le site est optimisé pour :
- Chargement rapide (< 3s)
- Animations à 60 FPS
- Mobile-first
- SEO friendly

## 📧 Support

Pour toute question :
- **Email** : omegadevelopmentsfr@gmail.com
- **GitHub** : [omegadevelopmentsfr](https://github.com/omegadevelopmentsfr)

---

Créé avec ⚡ pour NovexOS
