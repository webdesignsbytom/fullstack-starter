import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'catapp',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,  // Duration the splash screen will be visible (in milliseconds)
      launchAutoHide: true,      // Automatically hide the splash screen after the duration
      backgroundColor: "#ffffffff",  // Background color of the splash screen
      androidScaleType: "CENTER_CROP",  // Scale type for Android
      showSpinner: true,        // Whether to show a spinner
      androidSpinnerStyle: "large",  // Spinner style for Android
      iosSpinnerStyle: "small",  // Spinner style for iOS
      spinnerColor: "#999999",  // Color of the spinner
      splashFullScreen: true,   // Display the splash screen in full screen mode
      splashImmersive: true     // Display the splash screen in immersive mode
    }
  }
};

export default config;
