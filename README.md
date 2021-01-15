# Google Keep Clone | MERN Stack

[![N|Solid](https://i.imgur.com/VtQ5SGd.png)](https://i.imgur.com/VtQ5SGd.png)

## [See Live](https://googlekeep-clone.netlify.app/)

# About The Project

This project is a Full Stack reimplementation of the official [Google Keep](https://keep.google.com/) app where users register/login with email and create notes. Notes may contain imageoptionally as well as labels and labels can be added/deleted individually.

### Built With

- [ReactJS](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Styled Components](https://styled-components.com/)
- [Redux](https://redux.js.org/)

## Installation

### Server

in /**config** folder create a **config.env** file and define **MONGO_URI** and **JWT_SECRET** environment variables.

Then, install the dependencies and start the server.

```sh
$ cd server
$ npm install
$ npm run dev
```

### Client

**BASE_URL** is defined in **/src/env.json** file as _http://localhost:8000_. Change this to the same address as your server is running on.

Then, install the dependencies and start the client.

```sh
$ cd client
$ npm install
$ npm run start
```

### TODO:

- [ ] Implement Masonry Layout
- [ ] Add List View Feature to Note Container
- [ ] Add Trash Bin Feature
- [ ] Make Note Body Editable
