# Ionic

## Web and Mobile Framework

Ionic is a Javascript framework that allows you to create web and mobile applications.

## Set up

`ionic start myApp tabs --type=react` create a ionic application
`cd myApp` nav to app to install dependencies
`ionic integrations enable capacitor`
`npm install @capacitor/core @capacitor/cli`
`ionic cap add ios` - enable mobile
`ionic cap add android` enable mobile
Android environment
`setx ANDROID_HOME "C:\Users\Tom\AppData\Local\Android\Sdk"`
`setx PATH "%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools"`
`cd android`
`echo sdk.dir=C:\\Users\\Tom\\AppData\\Local\\Android\\Sdk > local.properties` check installed correctly with 2 slashes
`echo "include ':app'" > capacitor.settings.gradle`

### Style

`npm install tailwindcss postcss autoprefixer` tailwind install
`npx tailwindcss init -p` init tailwind


```js
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Create a new CSS file in the src directory called tailwind.css and add the following Tailwind directives:

```css
/* src/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add to main.tsx

```js
import './tailwind.css'; // <-- Import Tailwind CSS here
```

## Build and Run

`npm run build`
`npx cap copy` Copy the built web assets to the native projects:
`ionic serve` run web app

`npx cap open ios` Open the native projects in their respective IDEs:
`npx cap open android` Open the native projects in their respective IDEs:

## Create APK

`ionic build`
`ionic capacitor copy android`
`ionic capacitor sync android`
`cd android`
`./gradlew assembleDebug`
