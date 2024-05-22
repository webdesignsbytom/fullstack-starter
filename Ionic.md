# Ionic

## Web and Mobile Framework

Ionic is a Javascript framework that allows you to create web and mobile applications.

## Set up

`ionic start myApp tabs --type=react` create a ionic application
`cd myApp` nav to app to install dependencies
`ionic integrations enable capacitor`
`ionic cap add ios` - enable mobile
`ionic cap add android` enable mobile

## Build and Run

`npm run build`
`npx cap copy` Copy the built web assets to the native projects:
`npx cap open ios` Open the native projects in their respective IDEs:
`npx cap open android` Open the native projects in their respective IDEs:
`ionic serve` run web app