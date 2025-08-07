# React Native

## New set up

`npx create-expo-app grounded-and-healing --template expo-template-blank-typescript`
`npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`
Delete index and app

## Create App

`npx create-expo-app myApp` creates a template
`npx create-expo-app@latest testApp --template blank-typescript` ts set up
Remake the /app/index.tsx as a App file exporting App.

`npx expo-doctor`

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
`npx expo start --clear`
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
`eas build`
`eas build --platform android`
`eas build:list`

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

## APK

`eas build --profile development --platform android`

## IOS

Apple Developer membership is required to create and install a development build on an iOS device.
To register any iOS device you'd like to develop onto your ad hoc provisioning profile, run the following command:

`eas device:create`
After registering your iOS device, you can create the development build by running the command:

`eas build --profile development --platform ios`
Devices running iOS 16 and above require enabling a special OS-level Developer Mode to install development builds. If you don't have this setting enabled or are installing your first development build on your device, see iOS Developer Mode to enable it.

After the build is complete, you can download it on your iOS device by scanning the QR code from the device's camera from the Expo CLI. The QR code is provided when the eas build command has finished running.

You can also find this QR code on the build page in the Expo dashboard. Click the Install button and scan the QR code using the system's camera.

## Example Code

```js
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ByteToastLogo} style={styles.image}>
        <Text style={styles.title}>App</Text>
        <Link href={'/explore'} style={styles.link}>
          Explore
        </Link>
      </ImageBackground>
    </View>
  );
};
```

Add your layout pages

```js
<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  <Stack>
    {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
    <Stack.Screen
      name='index'
      options={{ title: 'Home', headerShown: false }}
    />
    <Stack.Screen name='+not-found' />
  </Stack>
  <StatusBar style='auto' />
</ThemeProvider>
```
