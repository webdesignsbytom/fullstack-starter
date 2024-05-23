# DidgeriSnooze

## Table of Contents

- [DidgeriSnooze](#didgerisnooze)
  - [Table of Contents](#table-of-contents)
  - [Purpose](#purpose)
  - [Features](#features)
  - [License](#license)
  - [Code Structure](#code-structure)
    - [Directories](#directories)
    - [Key Files](#key-files)
  - [Code Structure](#code-structure-1)
    - [Directories](#directories-1)
    - [Key Files](#key-files-1)
  - [How to Run](#how-to-run)
    - [Prerequisites](#prerequisites)

## Purpose

DidgeriSnooze is an innovative product designed to cure snoring effectively. It uses a unique blend of technology and natural methods to provide a peaceful and snore-free sleep for users, improving their overall health and wellbeing.

## Features

- **Natural and Safe**: Utilizes non-invasive techniques to eliminate snoring.
- **User-Friendly**: Easy to use with straightforward instructions.
- **Effective Results**: Noticeable improvement in sleep quality from the first use.
- **Portable**: Compact and travel-friendly design.
- **Customizable**: Adjustable settings to suit individual needs.

## License

This project is private property and is not open for public use. For more details, see the [LICENSE](License.md) file.

## Code Structure

### Directories

- **src/components**: Reusable components such as the user interface elements.
- **src/pages**: Page components corresponding to different app routes.
- **src/theme**: Theming and style files.
- **src/assets**: Static assets like images and logos.
- **src/styles**: Additional CSS files for custom styling.

### Key Files

- **src/App.tsx**: Main app component with routing and setup.
- **src/components/SplashScreen.tsx**: Custom splash screen component.
- **src/theme/variables.css**: CSS variables for theming.
- **src/tailwind.css**: Tailwind CSS integration for utility-first styling.
- **capacitor.config.ts**: Capacitor configuration for native functionality.


## Code Structure

### Directories

- **src/components**: Reusable components such as the splash screen.
- **src/pages**: Page components corresponding to different app routes.
- **src/theme**: Theming and style files.
- **src/assets**: Static assets like images and logos.
- **src/styles**: Additional CSS files for custom styling.

### Key Files

- **src/App.tsx**: Main app component with routing and tab setup.
- **src/components/SplashScreen.tsx**: Custom splash screen component.
- **src/theme/variables.css**: CSS variables for theming.
- **src/tailwind.css**: Tailwind CSS integration for utility-first styling.
- **capacitor.config.ts**: Capacitor configuration for native functionality.

## How to Run

Clone file
`git clone https://github.com/yourusername/cat-app.git`
`cd cat-app`
`npm install`
`ionic serve`

Add platforms
`ionic capacitor add ios`
`ionic capacitor add android`
`ionic capacitor sync`

`ionic capacitor open ios`
`ionic capacitor open android`

Build
`ionic build`

### Prerequisites

- **Node.js**: Ensure Node.js is installed. [Download Node.js](https://nodejs.org/)
- **Ionic CLI**: Install the Ionic CLI globally.
  ```sh
  npm install -g @ionic/cli
  ```
