# Fullstack Starter

A list of programs, libraries and compoents along with quick installs and web links for details

## Table of contents

- [Fullstack Starter](#fullstack-starter)
  - [Table of contents](#table-of-contents)
  - [Creating Projects](#creating-projects)
    - [React App](#react-app)
    - [TypeScript React](#typescript-react)
    - [Vue JS APP](#vue-js-app)
    - [NEXT JS APP](#next-js-app)
    - [Icons / Libraries](#icons--libraries)
    - [Google Add ons](#google-add-ons)
  - [Styles](#styles)
    - [Tailwind CSS](#tailwind-css)
    - [SCSS](#scss)
  - [Node](#node)
    - [NPM Install Dependencies](#npm-install-dependencies)
    - [Socket io](#socket-io)
  - [Databases](#databases)
    - [Using a Local database](#using-a-local-database)
    - [Seeding/prisma](#seedingprisma)
    - [PostgreSQL](#postgresql)
    - [Errors](#errors)
  - [Completing projects](#completing-projects)
  - [Github](#github)
    - [General Comanads](#general-comanads)
    - [Git SSH Keygen](#git-ssh-keygen)
  - [Minio](#minio)
  - [Vercel](#vercel)
  - [Docker](#docker)
    - [Prune all unused Docker objects](#prune-all-unused-docker-objects)
    - [Prune dangling volumes](#prune-dangling-volumes)
    - [Prune Docker builder cache](#prune-docker-builder-cache)
    - [Prune unused Docker networks](#prune-unused-docker-networks)
    - [Update running container ???](#update-running-container-)
    - [Terminology](#terminology)
  - [Headless Browser](#headless-browser)
  - [sudo chown tomus:tomus /home/tomus/one\_server/](#sudo-chown-tomustomus-hometomusone_server)
  - [Power](#power)

## Creating Projects

`npm install -g create-react-app` global react install

### React App

- `npx create-react-app my-app`
- `npm install react-router-dom` in index.js `import { BrowserRouter } from 'react-router-dom'`
- `npm install @mui/material @emotion/react @emotion/styled` material ui
- `npm install react-icons --save` react icons
- `npm install framer-motion` scrolling
- `npm install --save-dev @babel/plugin-proposal-private-property-in-object` general udpate needed
- Quick uninstall `npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals`
- Quick install `npm install react-router-dom axios jwt-decode uuid`
- `npm i --save-dev @types/react-helmet`

### TypeScript React

`npx create-react-app my-app --template typescript`

### Vue JS APP

### NEXT JS APP

`npx create-next-app@latest next-app-one`
`npm run dev`

`npx shadcn-ui@latest init` tailwind update library for next `const inter = Inter({ subsets: ["latin"], variable: "--font-sans",});`
`https://ui.shadcn.com/docs/installation/next` link to installation doc

### Icons / Libraries

- `npm i react-icons` or `npm install react-icons --save`
- `npm i swiper`

### Google Add ons

- `npm i react-ga4` install google analytics

## Styles

### Tailwind CSS

1. Vanilla install

- requires node JS and npm package installed `npm init -y`
- `npm install tailwindcss` to install tailwind dependancy
- `npm install -D tailwind`
- `npx tailwindcss init` installs .config file
- `@tailwind base; @tailwind components; @tailwind utilities;` add to global css file
- `"scripts": { "build-css": "tailwindcss build -i src/styles.css -o public/styles.css"},`
- `"prettier": "npx prettier --write **/*.html"` inbuild to tailwind - add to scripts

2. React install

- create react app with npx
- `npm install -D tailwindcss`
- `npx tailwindcss init` adds config file
- `@tailwind base; @tailwind components; @tailwind utilities;` add to global css file
- `npm install @heroicons/react` icons library `https://heroicons.com/#gh-light-mode-only`
- `npm install @headlessui/react` component library

3.  Tailwind notes

- center `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`

### SCSS

CSS with super powers.
Having functions, loops and variables.
Requires node.

`npm install sass --save-dev`

## Node

### NPM Install Dependencies

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
- `npm install swagger-ui-react` use swagger display
- `npm install react-codemirror2 codemirror` code display
- `npm install codemirror/mode/yaml/yaml` yaml code display
- `npm install -g npm@latest` update node
- `nvm install node` install latest
- `npm i google-auth-library` google oauth - needs dotenv
- `npm i helmet` add header controller
- `npm i express-rate-limit` limits server requests

### Socket io

- Client Install `npm i socket.io-client`
- Server install `npm i socket.io`

## Databases

### Using a Local database

- In the terminal of your app run `npm install -g json-server`
- create a folder called `database`
- add the file db.json
- in a second terminal run `npx json-server -p 4000 database/db.json`

### Seeding/prisma

- links to tech info [https://pris.ly/d/prisma-schema]
  - For admin roles use `enum Role { ADMIN, USER }` and attached `role Role` to the user in schema.
  - `npx prisma generate` to update the schema. Use when changing seed or prisma.schema
  - `npx prisma migrate dev --create-only --skip-seed --name XXXX` add relationships
  - `npx prisma migrate reset` reset database
- Create
- `npm i prisma --save-dev` isntall prisma as dev
- `npx prisma init --datasource-provider sqlite` create a database type

### PostgreSQL

- Linux
`sudo apt install postgresql postgresql-contrib`
`sudo -i -u postgres`

`\l` list databases
`\d` list tables
`\d <name>` list table of name
`\dn` list scema
`\du` list users and roles
`createdb <name>` create database

- Windows
Install PgAdmin and Postgres
Create env variable on system.
Search env variables in start menu
Add new System Variable with path to postgres `C:\Program Files\PostgreSQL\<version>\bin`
login as user `psql -U postgres`
`CREATE USER admin WITH PASSWORD 'admin';`
`ALTER USER admin CREATEDB;` give access to create databases to user
  
### Errors

- `HTTP_HEADER_SENT` You are trying to return two headers. Add a `return` to any `res.` parts towards the end.
- `P002` means the field has a `@unique` it shouldnt - unique id issue
- `ReferenceError: require is not defined in ES module scope, you can use import instead` you have `type: module` in package.json. import as requested by error
- `SyntaxError: Cannot use import statement outside a module` opposite of above error. add `type: module` in package.json.

## Completing projects

Make a file structure
`find . -path './node_modules' -prune -o -path './logs' -prune -o -path './.git' -prune -o -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g' > file_structure.txt`

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
- `git reset --hard HEAD`
- `origin` location of repo on github
- `git remote remove origin` remove git
- `rm -rf .git` remove git
- `git log --oneline --decorate --grap` decent log
- `git tag <TAG>` add a tag to the head
- `git tag <TAG> <COMMIT>` add a tag to a previous commit `git tag V1.0 d786063`
- `git rm --cached -- .env;` remove env
- `git rm --cached -- .env.*`

### Git SSH Keygen

Connect code to server

1. Create ssh key `ssh-keygen -t rsa` || `ssh-keygen -t rsa -b 4096 -C "cat-app"`
2. find .pub file
3. copy key and add to github then use `git clone ssh..`

## Minio

`wget https://dl.min.io/server/minio/release/linux-amd64/minio` install
`chmod +x minio`make executable
`sudo mv minio /usr/local/bin/` move here
`mkdir -p /data/minio` store files here
`minio server /data/minio` start server
`mc --version` check minio client version
`nohup minio server /data/minio > minio.log 2>&1 &` run in background
`nohup minio server --address "0.0.0.0:9000" /data/minio > minio.log 2>&1 &` 
`pkill minio` manually stop
`mc ls myminio` list all buckets


/etc/systemd/system/multi-user.target.wants/minio.service - route to files
`ls -ld /data/minio/.minio.sys` 

export MINIO_ROOT_USER=
export MINIO_ROOT_PASSWORD=

## Vercel

- Set deploy from server file.
- use 'vercel.json' template for deploy - must have src/server.js or whatever starting connection is.
- drag and drop .env into the environment variables section in settings.

## Docker

`-d` detached mode so it runs in background
`docker pull <name>` pull an Image
`docker run <name>` run the Container
`docker run --rm` run the container and delete when exited
`docker images` list of images
`docker ps` list of Containers currently running
`docker ps -a` list of all Containers
`docker stop <id>` stop the container
`docker rm 178ad54331a2` delete container
`docker container prune` delete all exited containers
`docker port <container>` list ports exposed
`docker push myhubusername/myproject:modified` push to hub

`docker build` when you have a Dockerfile
`docker build -t <hubname>/<filename> .` build file to a path

`docker logs moncards-instance1` get log

`docker run -it busybox sh`

`--restart unless-stopped`

`docker run -d -P --name static-site prakhar1989/static-site`
`-d` detach terminal
`-P` publish exposed port

`docker run`: This command is used to create and start a new container.
`-it`: These are two flags:
`-i` (interactive): Keeps STDIN open even if not attached.
`-t` (tty): Allocates a pseudo-TTY (terminal).
`busybox`: The name of the Docker image to use. Busybox is a lightweight Unix utility toolkit.
`sh`: The command to run inside the container, in this case, the sh shell.
By using the -it flags, you are opening an interactive terminal session within the container.

### Prune all unused Docker objects

`docker system prune -a`

### Prune dangling volumes

`docker volume prune`

### Prune Docker builder cache

`docker builder prune`

### Prune unused Docker networks

`docker network prune`

### Update running container ???

`sudo docker pull techdesigntavistock/trading-card-game:latest`
`sudo docker stop myproject-instance1 myproject-instance2 myproject-instance3`
`sudo docker rm myproject-instance1 myproject-instance2 myproject-instance3`
`sudo docker run -d --name moncards-instance1 -p 5001:5000 techdesigntavistock/trading-card-game:latest`
`sudo docker run -d --name moncards-instance2 -p 5002:5000 techdesigntavistock/trading-card-game:latest`
`sudo docker run -d --name myproject-instance3 -p 5003:5000 techdesigntavistock/trading-card-game:latest`

### Terminology

In the last section, we used a lot of Docker-specific jargon which might be confusing to some. So before we go further, let me clarify some terminology that is used frequently in the Docker ecosystem.

- Images - The blueprints of our application which form the basis of containers. In the demo above, we used the docker pull command to download the busybox image.
- Containers - Created from Docker images and run the actual application. We create a container using docker run which we did using the busybox image that we downloaded. A list of running containers can be seen using the docker ps command.
- Docker Daemon - The background service running on the host that manages building, running and distributing Docker containers. The daemon is the process that runs in the operating system which clients talk to.
- Docker Client - The command line tool that allows the user to interact with the daemon. More generally, there can be other forms of clients too - such as Kitematic which provide a GUI to the users.
- Docker Hub - A registry of Docker images. You can think of the registry as a directory of all available Docker images. If required, one can host their own Docker registries and can use them for pulling images.

## Headless Browser

Firefox 
Navigate to the filefox directory in Program Files
`./firefox.exe -headless` to run
`"/c/Program Files/Mozilla Firefox/firefox.exe" -headless`


## sudo chown tomus:tomus /home/tomus/one_server/


## Power

`sudo bash -c "echo 1 > /sys/class/backlight/*/bl_power"`
`sudo bash -c "echo 0 > /sys/class/backlight/*/bl_power"`
