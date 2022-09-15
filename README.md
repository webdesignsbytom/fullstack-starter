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

## Optional 
- bootstrap
- tailwind

## Using a Local database
- In the terminal of your app run `npm install -g json-server`
- create a folder called `database`
- add the file db.json
- in a second terminal run `npx json-server -p 4000 database/db.json`
- install nodemon to auto restart database
# Steps to create backend

## install dependencies

- prisma - [https://github.com/prisma/prisma]
  - `npm install prisma --save-dev`
  - `npx prisma` for dev dependenceies
- @prisma/client
  - `npm install @prisma/client`
- express
  - `npm install express`
- jsonwebtoken - generate json web tokens
  - `npm install jsonwebtoken`
- cors
  - `npm install cors`
- bycrypt - used to hash our passwords
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
- jwt-decode 
  - `npm install jwt-decode`
  - `import jwt_decode from "jwt-decode"` `var token = "eyJ0eXAiO.../// jwt token";` `var decoded = jwt_decode(token);`

## Dev dependency

- nodemon
  - `npm install --save-dev nodemon` to autorestart server

## SRC

- src
  - utils
  - middleware - add `const auth = require('./middleware/auth')` and below add `app.use('/user', auth, userRouter)` to server.js to apply the auth function to user routes. Error catching can be handled through here. Set the last thing before module.exports in server.js to `app.use((error, req, res, next) => { })`
    - auth.js
  - routers
    - user.js
  - domain
    - 
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

## Libraries
- react mui components `npm install @mui/material @emotion/react @emotion/styled` checkout the installation guide [https://mui.com/material-ui/getting-started/installation/]
### Other Programs

- insomnia - connects to your localhost via port
- elephantsql - hosts postgreSQL databases

# Seeding/prisma
- links to tech info [https://pris.ly/d/prisma-schema]
- For admin roles use `enum Role { ADMIN, USER }` and attached `role Role` to the user in schema.
- `npx prisma generate` to update the schema. Use when changing seed or prisma.schema
- `npx prisma migrate dev --create-only --skip-seed --name XXXX` add relationships
- `npx prisma migrate reset` reset database
## Run 

- `npm start` 

# Test
- check node version `node -v`
# Errors
## common
- `HTTP_HEADER_SENT` You are trying to return two headers. Add a `return` to any `res.` parts towards the end.
- `P002` means the field has a `@unique` it shouldnt - unique id issue
- React wont return an object?