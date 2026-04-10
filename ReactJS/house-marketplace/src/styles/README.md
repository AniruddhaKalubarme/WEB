# CSS Structure Documentation

## Overview
The CSS has been organized into modular, maintainable files based on components and features.

## File Structure

```
src/
├── styles/
│   ├── Variables.css       # Global variables and common styles
│   ├── Auth.css            # SignIn, SignUp, ForgotPassword pages
│   ├── OAuth.css           # Google OAuth component styling
│   └── Profile.css         # User profile page styling
├── pages/
│   ├── SignIn.jsx          # Imports Auth.css, OAuth.css
│   ├── SignUp.jsx          # Imports Auth.css, OAuth.css
│   ├── ForgotPassword.jsx  # Imports Auth.css
│   └── Profile.jsx         # Imports Profile.css
├── components/
│   └── OAuth.jsx           # Imports OAuth.css
└── index.css               # Main entry point (imports all modular CSS files)
```

## CSS Files Description

### 1. Variables.css
- Global CSS variables (colors, shadows, transitions, etc.)
- Common styles (body, headings, links, buttons)
- Utility classes (padding, margins, text alignment)
- Scrollbar styling

**Usage**: Imported globally in index.css

### 2. Auth.css
- Page container styling
- Form and input field styles
- Password visibility toggle
- Sign In / Sign Up buttons and styling
- Forgot Password page styles
- Responsive design for auth pages

**Used by**: SignIn.jsx, SignUp.jsx, ForgotPassword.jsx

### 3. OAuth.css
- Social login container styling
- Google icon and button styling
- Hover and click animations
- Mobile responsive design

**Used by**: OAuth.jsx (component), SignIn.jsx, SignUp.jsx

### 4. Profile.css
- Profile page container
- Profile header and logout button
- Name and email display/edit states
- Profile form styling
- Password input for email change verification
- Mobile responsive design

**Used by**: Profile.jsx

## CSS Variables

```css
:root {
  --primary-color: #007bff;           /* Blue */
  --primary-dark: #0056b3;             /* Dark Blue */
  --danger-color: #dc3545;             /* Red */
  --success-color: #28a745;            /* Green */
  --text-dark: #2c2c2c;                /* Dark Text */
  --bg-light: #fafafa;                 /* Light Background */
  --border-color: #e0e0e0;             /* Border */
  --shadow-sm: 0 2px 8px ...;          /* Small Shadow */
  --transition-speed: 0.3s;             /* Animation Speed */
  --border-radius: 8px;                 /* Standard Border Radius */
}
```

## Import Chain

```
index.css
├── Variables.css (global styles)
├── Auth.css
├── OAuth.css
└── Profile.css
```

Component imports:
```
SignIn.jsx → Auth.css + OAuth.css
SignUp.jsx → Auth.css + OAuth.css
ForgotPassword.jsx → Auth.css
Profile.jsx → Profile.css
OAuth.jsx → OAuth.css
```

## Responsive Breakpoints

All CSS files include responsive design with breakpoints:
- **Tablets**: 768px and below
- **Mobile**: 480px and below

## Benefits of Modular CSS

✅ **Better Organization**: Each file has a specific purpose
✅ **Easy Maintenance**: Find and update styles quickly
✅ **Reusability**: Variables and utilities shared across files
✅ **Performance**: Load only needed styles per page
✅ **Team Collaboration**: Clear file structure for team development
✅ **Scalability**: Easy to add new style files as project grows

## Adding New Styles

1. Create a new file in `src/styles/` (e.g., `NewComponent.css`)
2. Import the file in the corresponding component
3. Use existing CSS variables for consistency

Example:
```javascript
// In NewComponent.jsx
import '../styles/NewComponent.css'
```

## Common Utility Classes

Use these utility classes in your JSX:

```jsx
<div className="mt-2 gap-2 text-center">...</div>
```

Available utilities:
- `mt-1`, `mt-2`, `mt-3` - Margin Top
- `mb-1`, `mb-2`, `mb-3` - Margin Bottom
- `gap-1`, `gap-2`, `gap-3` - Gap spacing
- `text-center`, `text-right` - Text alignment
- `hidden` - Display none
- `disabled` - Disabled state styling
