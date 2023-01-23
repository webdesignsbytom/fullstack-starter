# fullstack-starter
Set up guide
Boiler plate code to set up and start a full stack project quickly and easily.
# Creating Frontend React App
## Folder set up

- create folder
- `mkdir server`
- `npx create-react-app my-app`
- `npm install react-router-dom` expect in index.js `import { BrowserRouter } from 'react-router-dom'`
- `npm install @mui/material @emotion/react @emotion/styled` material ui
## Fork set up

- fork and cd to file then run `npm ci` for dependencies
## icons

- `npm i react-icons` or `npm install react-icons --save`
- `npm i swiper`

## Tailwind
- requires node JS and npm package installed `npm init -y`
- `npm install tailwindcss` to install tailwind dependancy
- `npm install -D tailwind`
- `npx tailwindcss init` installs .config file
- `@tailwind base; @tailwind components; @tailwind utilities;` add to global css file
- `"scripts": { "build-css": "tailwindcss build -i src/styles.css -o public/styles.css"},` 
## Tailwind/React
- create react app with npx
- `npm install -D tailwindcss`
- `npx tailwindcss init` adds config file
- `npm install @heroicons/react` icons library `https://heroicons.com/#gh-light-mode-only`

## Using a Local database
- In the terminal of your app run `npm install -g json-server`
- create a folder called `database`
- add the file db.json
- in a second terminal run `npx json-server -p 4000 database/db.json`

# Steps to create backend
## install dependencies
- `npm init -y` to start dependencies and node
- `npm install express jsonwebtoken cors bcrypt morgan express-async-errors jwt-decode`
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
  - `npm install cookie-parser` add `const cookieParser = require('cookie-parser')` to index.js
- express async errors
  - `npm install express-async-errors` add `require('express-async-errors')` immedaitly after pages that require express at the top
- jwt-decode
  - `npm install jwt-decode` add to page: `const jwt_decode = require('jwt-decode');`
  - `import jwt_decode from "jwt-decode"` `var token = "eyJ0eXAiO.../// jwt token";` `var decoded = jwt_decode(token);`
- axios
  - `npm install axios`
- run
  - `npm start`

## Dev dependency
- nodemon
  - `npm install --save-dev nodemon` to autorestart server `"scripts": {"start" : "nodemon src/index.js"},`
## Libraries
  - react mui components `npm install @mui/material @emotion/react @emotion/styled`
  - checkout the installation guide [https://mui.com/material-ui/getting-started/installation/]

# Seeding/prisma
- links to tech info [https://pris.ly/d/prisma-schema]
  - For admin roles use `enum Role { ADMIN, USER }` and attached `role Role` to the user in schema.
  - `npx prisma generate` to update the schema. Use when changing seed or prisma.schema 
  - `npx prisma migrate dev --create-only --skip-seed --name XXXX` add relationships
  - `npx prisma migrate reset` reset database
### Errors
  - `HTTP_HEADER_SENT` You are trying to return two headers. Add a `return` to any `res.` parts towards the end.
  - `P002` means the field has a `@unique` it shouldnt - unique id issue
  - `ReferenceError: require is not defined in ES module scope, you can use import instead` you have `type: module` in package.json. import as requested by error
  - `SyntaxError: Cannot use import statement outside a module` opposite of above error. add `type: module` in package.json.
## Github
  - `-u` upstream `m` message
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
### Other Programs
- insomnia - connects to your localhost via port
- elephantsql - hosts postgreSQL databases
- prisma - [https://github.com/prisma/prisma]


## Deploy react to gh-pages
  - `git remote add origin https://github.com/webdesignbytom/NAME.git`
  - `git branch -M main`
  - `git push -u origin main`
  - `git push`
  - `npm instal gh-pages --save-dev`
  - `npm run deploy`


## json db
import itemsDB from './items.json';

const [items, setItems] = useState([]);

useEffect(() => {
setItems(itemsDB);
}, []);
