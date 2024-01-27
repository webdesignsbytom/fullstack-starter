# Fullstack Starter

A list of programs, libraries and compoents along with quick installs and web links for details

## Table of contents

- [Fullstack Starter](#fullstack-starter)
  - [Table of contents](#table-of-contents)
  - [Creating Frontend App](#creating-frontend-app)
  - [icons / libraries](#icons--libraries)
  - [Google](#google)
  - [Tailwind](#tailwind)
    - [Vanilla](#vanilla)
    - [React](#react)
    - [tailwind notes](#tailwind-notes)
  - [Using a Local database](#using-a-local-database)
  - [Steps to create backend](#steps-to-create-backend)
  - [install dependencies](#install-dependencies)
    - [Socket io](#socket-io)
  - [Node](#node)
  - [Seeding/prisma](#seedingprisma)
  - [Errors](#errors)
  - [Github](#github)
    - [General Comanads](#general-comanads)
    - [Deploy react to gh-pages](#deploy-react-to-gh-pages)
  - [Vercel](#vercel)
  - [Hosting](#hosting)

## Creating Frontend App

- `npx create-react-app my-app`
- `npm install react-router-dom` in index.js `import { BrowserRouter } from 'react-router-dom'`
- `npm install @mui/material @emotion/react @emotion/styled` material ui
- `npm install react-icons --save` react icons
- Quick uninstall `npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals`
- Quick install `npm install axios jwt-decode uuid`

## icons / libraries

- `npm i react-icons` or `npm install react-icons --save`
- `npm i swiper`

## Google

- `npm i react-ga -S` install google analytics

## Tailwind

### Vanilla

- requires node JS and npm package installed `npm init -y`
- `npm install tailwindcss` to install tailwind dependancy
- `npm install -D tailwind`
- `npx tailwindcss init` installs .config file
- `@tailwind base; @tailwind components; @tailwind utilities;` add to global css file
- `"scripts": { "build-css": "tailwindcss build -i src/styles.css -o public/styles.css"},`
- `"prettier": "npx prettier --write **/*.html"` inbuild to tailwind - add to scripts

### React

- create react app with npx
- `npm install -D tailwindcss`
- `npx tailwindcss init` adds config file
- `@tailwind base; @tailwind components; @tailwind utilities;` add to global css file
- `npm install @heroicons/react` icons library `https://heroicons.com/#gh-light-mode-only`
- `npm install @headlessui/react` component library

### tailwind notes

- center `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`

## Using a Local database

- In the terminal of your app run `npm install -g json-server`
- create a folder called `database`
- add the file db.json
- in a second terminal run `npx json-server -p 4000 database/db.json`

## Steps to create backend

## install dependencies

- `npm init -y` to start dependencies and node
- run `npm start`
- `npm install express jsonwebtoken cors bcrypt morgan express-async-errors jwt-decode uuid nodemailer`
- `npm install prisma --save-dev`
- `npx prisma` for dev dependenceies
- `npx prisma init` to add prisma files
- if your file doesnt seed check your package.json to include `"prisma": {"seed": "node prisma/seed.js"},`.
- `npm install @prisma/client` @prisma/client
- express `npm install express`
- jsonwebtoken - generate json web tokens `npm install jsonwebtoken`
- cors `npm install cors`
- bycrypt - used to hash our passwords `npm install bcrypt`
- morgan `npm install morgan`
- dotenv `npm install dotenv --save` `require('dotenv').config()` to index.js at the top
- cookies `npm install cookie-parser` add `const cookieParser = require('cookie-parser')` to index.js
- express async errors `npm install express-async-errors` add `require('express-async-errors')` immedaitly after pages that require express at the top
- jwt-decode `npm install jwt-decode` add to page: `const jwt_decode = require('jwt-decode');` `import jwt_decode from "jwt-decode"`
- axios `npm install axios`
- Nodemailer `npm install nodemailer` send emails via node
- `npm i nodemailer-express-handlebars`
- redux - state management `npm i @reduxjs/toolkit react-redux`
- nodemon `npm install --save-dev nodemon` to autorestart server `"scripts": {"start" : "nodemon src/index.js"},`
- time and date `npm install uuid` `import { v4 as uuidv4 } from 'uuid'; uuidv4();`
- dates `npm i date-fns uuid`
- dates `npm install moment`

### Socket io

- Client Install `npm i socket.io-client`
- Server install `npm i socket.io`

## Node

- `npm install -g npm@latest` update node
- `nvm install node` install latest

## Seeding/prisma

- links to tech info [https://pris.ly/d/prisma-schema]
  - For admin roles use `enum Role { ADMIN, USER }` and attached `role Role` to the user in schema.
  - `npx prisma generate` to update the schema. Use when changing seed or prisma.schema
  - `npx prisma migrate dev --create-only --skip-seed --name XXXX` add relationships
  - `npx prisma migrate reset` reset database

## Errors

- `HTTP_HEADER_SENT` You are trying to return two headers. Add a `return` to any `res.` parts towards the end.
- `P002` means the field has a `@unique` it shouldnt - unique id issue
- `ReferenceError: require is not defined in ES module scope, you can use import instead` you have `type: module` in package.json. import as requested by error
- `SyntaxError: Cannot use import statement outside a module` opposite of above error. add `type: module` in package.json.

## Github

### General Comanads

- `-u` upstream `-m` message
- `git init` create a git repository on local machine
- `git add .` adds all files to the repo
- `git commit -m 'comment'` commit staged changes
- `git remote add origin ...`
- `git push -u origin master` pushes everything on to git
- `git push` - update and add commits live to repo
- `git pull` updates your branch
- `git checkout -b NAME` create new branch and move unsaved work to the new branch
- `git checkout main` switch branch to main branch or other branches
- `git merge main` - merge file to main branch
- `git reset` to unstage changes
- `git reset HEAD~1` undo last commit
- `origin` location of repo on github
- `git remote remove origin` remove git
- `rm -rf .git` remove git

### Deploy react to gh-pages

- `git remote add origin https://github.com/webdesignbytom/NAME.git`
- `git branch -M main`
- `git push -u origin main`
- `git push`
- `npm instal gh-pages --save-dev`
- `npm run deploy`

## Vercel

- Set deploy from server file.
- use 'vercel.json' template for deploy - must have src/server.js or whatever starting connection is.
- drag and drop .env into the environment variables section in settings.

## Hosting

- `npm run build`
