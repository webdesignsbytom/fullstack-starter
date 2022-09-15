# Client package.JSON
{
  "name": "team-dev-client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/material": "^5.6.2",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.1.1",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.26.1",
    "jwt-decode": "^3.1.2",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "cypr": "cypress open"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "cypress": "^9.5.4"
  }
}

# Server package.JSON
{
  "name": "team-dev-server",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "prepare": "husky install"
  },
  "prisma": {
    "seed": "node prisma/seed.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/boolean-uk/team-dev-server.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "prettier": "@boolean-uk/boolean-prettier-config",
  "bugs": {
    "url": "https://github.com/boolean-uk/team-dev-server/issues"
  },
  "devDependencies": {
    "@boolean-uk/boolean-prettier-config": "^1.0.2",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-standard": "^16.0.3",
    "eslint-plugin-import": "^2.25.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-promise": "^5.1.0",
    "husky": "^7.0.4",
    "nodemon": "^2.0.15",
    "prettier": "^2.6.2",
    "prisma": "^3.12.0"
  },
  "dependencies": {
    "@prisma/client": "^3.12.0",
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "express-async-errors": "^3.1.1",
    "jsonwebtoken": "^8.5.1"
  }
}
