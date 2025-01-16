# React Native

## Create App

`npx create-expo-app myApp` creates a template
Remake the /app/index.tsx as a App file exporting App.

Reset your project
You can remove the boilerplate code and start fresh with a new project. Run the following command to reset your project:
`npm run reset-project`

You need to import stylesheets and create a sheet
`const styles = StyleSheet.create({})`

I had to add these types to `expo-env.d.ts` to import images

declare module "_.png";
declare module "_.svg";
declare module "_.jpeg";
declare module "_.jpg";

## Commands

`npx expo start` Starts the development server (whether you are using a development build or Expo Go).
`npx expo prebuild` Generates native Android and iOS directories using Prebuild.
`npx expo run:android` Compiles native Android app locally.
`npx expo run:ios` Compiles native iOS app locally.
`npx expo install package-name` Used to install a new library or validate and update specific libraries in your project by adding --fix option to this command.
`npx expo lint` Setup and configures ESLint. If ESLint is already configured, this command will lint your project files.

## EAS CLI

EAS CLI is used to log in to your Expo account and compile your app using different EAS services such as Build, Update, or Submit. You can also use this tool to:

Publish your app to the app stores
Create a development, preview, or production build of your app
Create over-the-air (OTA) updates
Manage your app credentials
Create an ad hoc provisioning profile for an iOS device
To use EAS CLI, you need to install it globally on your local machine by running the command:

`npm install -g eas-cli`

## Splash and Icons

Are controlled in `app.json`

## Shortcuts

`rnfe` react natve functional export component

## Components

View
Text
Image
TextInput
Scrollview
Stylesheet
