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

## icons
- `npm i react-icons` 

## Fork set up
- fork and cd to file
- go into the front end and backend file and run `npm ci` for dependencies
# Steps to create frontend
## SRC

- src
  - assets
  - components users/login/loginPage users/login/registrationPage  header/Header.jsx  posts/PostPage posts/PostForm
  - pages
  - utils
    - client.js containing paths for GET/POST/PATCH/DELETE
  - styles
  - images

## Using a Local database
- In the terminal of your app run `npm install -g json-server`
- create a folder called `database`
- add the file db.json
- in a second terminal run `npx json-server -p 4000 database/db.json`
- install nodemon to auto restart database

# Steps to create backend

- `npm init -y` to start dependencies and node
## install dependencies
- Quick install
  - `npm install express jsonwebtoken cors bcrypt morgan express-async-errors jwt-decode`

- prisma - [https://github.com/prisma/prisma]
  - `npm install prisma --save-dev`
  - `npx prisma` for dev dependenceies
  - `npx prisma init` to add prisma files 
  - if your file doesnt seed check your package.json to include `"prisma": {"seed": "node prisma/seed.js"},`.

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
  - `const jwt_decode = require('jwt-decode');`
  - `import jwt_decode from "jwt-decode"` `var token = "eyJ0eXAiO.../// jwt token";` `var decoded = jwt_decode(token);`
- axios
  - `npm install axios`

## Dev dependency

- nodemon
  - `npm install --save-dev nodemon` to autorestart server `"scripts": {"start" : "nodemon src/index.js"},`

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
- .env
  - DATABASE_URL="?schema=prisma"
  - SHADOW_DATABASE_URL="?schema=shadow"
  - JWT_SECRET
  - JWT_EXPIRY

## Libraries
- react mui components `npm install @mui/material @emotion/react @emotion/styled` 
  - checkout the installation guide [https://mui.com/material-ui/getting-started/installation/]
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
# Errors
- `HTTP_HEADER_SENT` You are trying to return two headers. Add a `return` to any `res.` parts towards the end.
- `P002` means the field has a `@unique` it shouldnt - unique id issue
- React wont return an object?
- `ReferenceError: require is not defined in ES module scope, you can use import instead` you have `type: module` in package.json. import as requested by error
- `SyntaxError: Cannot use import statement outside a module` opposite of above error. add `type: module` in package.json.
## Github
- `-u` upstream
- `git init` create a git repository on local machine
- `git add .` adds all files to the repo
- `git commit -m 'comment'` -m is 'message' then add to commit list 
- If you tried to push now you would see `specify URL`. Create a git repo on the site then use
- `git remote add origin ...` and then
- `git push -u origin master`
- Now everything is on git
- `git push` - update and add commits live to repo
- `git pull` updates your branch 
- `git checkout -b NAME` create new branch and move unsaved stuff to the new branch
- 
- `git checkout main` switch branch to main branch
- `git merge main` - merge file to main branch

-`origin` location of repo on github 
## Deploy react to gh-pages
- `git remote add origin https://github.com/webdesignbytom/NAME.git`
- `git branch -M main`
- `git push -u origin main`
- `git push`
- `npm instal gh-pages --save-dev`
- `npm run deploy`

add to packagelock.json 
- "homepage": "https://webdesignbytom.github.io/NAME",
- "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

## Tailwind

- requires node JS and npm package installed
- Add link to tailwind in index.html
- `npm install tailwindcss` to install tailwind dependancy
- `npm install -d tailwind`
- `npx tailwindcss init` installs .config file
- `@tailwind base; @tailwind components; @tailwind utilities;` add to global css file

## json db

import itemsDB from './items.json';

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsDB);
  }, []);