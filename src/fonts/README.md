# Custom Fonts Setup Guide

## Method 1: Google Fonts (Recommended - Easy & Fast)

### Step 1: Add to public/index.html
Add this in the `<head>` section of `public/index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Step 2: Update tailwind.config.js
```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'fustat': ['Fustat', 'sans-serif'], // If you have Fustat font
      },
    },
  },
}
```

### Step 3: Use in Components
```javascript
<h1 className="font-space-grotesk font-bold text-4xl">
  Your Heading
</h1>
```

## Method 2: Local Font Files

### Step 1: Add font files to public/fonts/
```
public/
├── fonts/
│   ├── Inter-Regular.woff2
│   ├── Inter-Bold.woff2
│   ├── SpaceGrotesk-Regular.woff2
│   └── SpaceGrotesk-Bold.woff2
```

### Step 2: Add to src/App.css
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Method 3: npm Install Fonts
```bash
npm install @fontsource/inter @fontsource/space-grotesk
```

Then import in src/index.js:
```javascript
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';
```

## Recommended Fonts for Your Site:
- **Headings**: Space Grotesk or Fustat (bold, modern)
- **Body Text**: Inter (clean, readable)
- **Navigation**: Inter (consistent)