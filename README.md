# Basic HTML CSS JS Project with DaisyUI v5 & Tailwind v4

A modern web project setup using Tailwind CSS v4 and DaisyUI v5 component library, deployed to GitHub Pages.

## Features

- **Tailwind CSS v4** - Utility-first CSS framework
- **DaisyUI v5** - Component library built for Tailwind CSS
- **Vanilla JavaScript** - No framework dependencies
- **Responsive Design** - Mobile-first approach
- **Modern Build System** - PostCSS integration
- **GitHub Pages Deployment** - Automated deployment workflow

## Project Structure

```
├── dist/
│   └── output.css          # Compiled CSS file
├── src/
│   ├── app.css            # Main CSS file with Tailwind imports
│   └── app.js             # JavaScript file
├── index.html             # Main HTML file
├── postcss.config.js      # PostCSS configuration
├── package.json           # Project dependencies and scripts
└── README.md              # This file
```

## Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

### Build CSS
```bash
npm run build
```

### Watch for changes (development)
```bash
npm run watch
```

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup Steps:**

1. **Create a GitHub repository** and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages** in your repository settings:
   - Go to your repository on GitHub
   - Click **Settings** > **Pages**
   - Under **Build and deployment**, select **GitHub Actions** as the source
   - Click **Save**

3. **Wait for deployment** - The workflow will automatically build and deploy your site

### Manual Deployment

You can also deploy manually using the `gh-pages` package:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

**Note for manual deployment:** You'll need to configure the `deploy` script in `package.json` with your repository information.

## Usage

Open `index.html` in your browser to see the demo page featuring:

- Various button styles from DaisyUI
- Card components
- Form elements
- Alert components
- Responsive grid layouts

## Technologies Used

- **Tailwind CSS v4** - Latest version with PostCSS integration
- **DaisyUI v5** - Component library for rapid UI development
- **PostCSS** - CSS transformation tool
- **Vanilla JavaScript** - Client-side interactivity

## Browser Support

Modern browsers with support for:
- CSS Grid and Flexbox
- CSS Custom Properties
- ES6+ JavaScript features

## Customization

### Adding Custom CSS
Add your custom styles to `src/app.css` after the Tailwind import:

```css
@import "tailwindcss";

/* Add your custom styles here */
.custom-class {
  /* your styles */
}
```

### Extending Tailwind Configuration
Create a `tailwind.config.js` file for advanced customization:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
    },
  },
  plugins: [require('daisyui')],
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Build the CSS: `npm run build`
5. Test thoroughly
6. Submit a pull request

## License

MIT License - feel free to use this setup in your projects.