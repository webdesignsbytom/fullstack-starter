# fullstack-starter

Boiler plate code to set up and start a full stack project quickly and easily
Including perfect file guide for src
Including serveral pre set functions such as findUserById and error codes
React set up with out clutter and with BrowserRouter installed
Set up guide

# Folder set up

- create folder
  - `mkdir server`
  - `npx create-react-app my-app`
    - `npm install react-router-dom` ( expect in index.js import { BrowserRouter } from 'react-router-dom' )

## Fork set up

- fork and cd to file
- `npm ci` for deps

# Steps to create frontend
## SRC

- src
  - components
  - utils
  - styles

## Steps to create backend

## install dependencies

- prisma
  - `npm install prisma --save-dev`
  - `npx prisma` for dev dependenceies
  - `npx prisma generate`
  - `npx prisma migrate dev --name init`
- @prisma/client
  - `npm install @prisma/client`
- express
  - `npm install express`
- jsonwebtoken
  - `npm install jsonwebtoken`
- cors
  - `npm install cors`
- bycrypt
  - `npm install bcrypt`
- morgan
  - `npm install morgan`
- dotenv
  - `npm install dotenv --save`
  - add `require('dotenv').config()` to index.js at the top
- cookies
  - `npm install cookie-parser`
  - add `const cookieParser = require('cookie-parser')` to index.js
- express async errors
  - `npm install express-async-errors`
  - add `require('express-async-errors')` immedaitly after pages that require express at the top

## Dev dependency

- nodemon
  - `npm install --save-dev nodemon`

## SRC

- src
  - utils
  - middleware
    - auth.js
  - routers
    - user.js
  - controllers
    - user.js
  - index.js
  - server.js

## env

- .env
  - shadow db
  - db
  - port
  - secretkey

### Other Programs

- insomnia - connects to your localhost via port
- elephantsql - hosts databases

# Seeding/prisma

- `npx prisma migrate reset` to execute the existing migrations & data seed. Use when changing seed or prisma
- `npx prisma migrate dev --create-only --skip-seed --name XXXX` add relationships
- `npx prisma migrate reset` reset database
