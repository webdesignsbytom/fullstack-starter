# fullstack-starter

Boiler plate code to set up and start a full stack project quickly and easily.
If you just want front end or back end you can remove the other file.
Including perfect file guide for src
Including serveral pre set functions such as findUserById and error codes
React set up with out clutter and with BrowserRouter installed
Set up guide

# Folder set up
- create folder
  - `mkdir server`
  - `npx create-react-app my-app`
    - `npm install react-router-dom` expect in index.js `import { BrowserRouter } from 'react-router-dom'`

## Fork set up
- fork and cd to file
- go into the front end and backend file and run `npm ci` for dependencies
# Steps to create frontend
## SRC

- src
  - components
  - utils
  - styles
  - images

# Steps to create backend

## install dependencies

- prisma - https://github.com/prisma/prisma
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
Be sure to update your .gitignore file to include .env
Or remove .expample from the end of .env.example in the files
- .env
  - shadow db, testing db
  - db,  url link
  - port, (usually 4000)
  - secretkey, used to hash and encrypt the header and payload (only you and the server should know this)

### Other Programs

- insomnia - connects to your localhost via port
- elephantsql - hosts databases

# Seeding/prisma

- For admin roles use `enum Role { ADMIN, USER }` and attached `role Role` to the user in schema.
- `npx prisma generate` to update the schema. Use when changing seed or prisma.schema
- `npx prisma migrate dev --create-only --skip-seed --name XXXX` add relationships
- `npx prisma migrate reset` reset database
- `P002` means the field has a `?` it shouldnt
## Run 

- `npm start` 

# Errors
## common
- `HTTP_HEADER_SENT` You are trying to return two headers. Add a `return` to any `res.` parts towards the end or shift them into a function
- `P002` means the field has a `?` it shouldnt
