# Mern Stack Setup

## Git init

- echo "# Portfolio-Project-Mern-Stack" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/ChrisOnions/Portfolio-Project-Mern-Stack.git
- git push -u origin main

---

## Create app

- npx create-react-app mern-stack-portfolio-project
- cd mern-stack-portfolio-project
- npm start
- Delete Source object

## init npm

-- npm init

## Dependencies

## front end

- npm install react-router-dom --save

## backened

- express mongoose dotenv

- concurrently
- bcrypt
- jsonwebtoken

with apollo/graph use graphql apollo-server-express

# Scripts

## concurently run .

```json
   "start": "node server/server.js",
   "develop": "concurrently \"cd server && npm run watch\" \"cd client &&  npm start\"",
   "install": "cd server && npm i && cd ../client && npm i",
   "seed": "cd server && npm run seed",
   "build": "cd client && npm run build"
```

## client

```json
   "start": "react-scripts start",
   "build": "react-scripts build",
   "test": "react-scripts test",
   "eject": "react-scripts eject"
```

## Server

```json
   "start": "node server.js",
   "watch": "nodemon server.js"
```

# Folder Structure

- app

  - Client
    - react-app
  - Server

  axios--npm package. -- "proxy": "http://localhost:3001",

  react
