# lab-32
Lab 32: Custom Hooks: Sockets and Fetch

[![Netlify Status](https://api.netlify.com/api/v1/badges/7f3d3497-964c-4be9-86d1-af31396ae4c2/deploy-status)](https://app.netlify.com/sites/dreamy-jennings-f47482/deploys)

[![Build Status](https://travis-ci.org/colosrjones-401d4/lab-32.svg?branch=master)](https://travis-ci.org/colosrjones-401d4/lab-32)

### Modules
#### `app.js`
#### `todo.js`
#### `wagon.js`
#### `index.js`

### Setup
#### `.env` requirements
* `PORT` - Port 3000
* `MONGODB API` - https://mongo-api-server.herokuapp.com/api/v1/todo

#### Running the app
* `npm start`
* Endpoint: `/api/v1/todo/`
  * Returns a JSON object.
* Required data:
  * text - text
  * category - text
  * assignee - text
  * difficulty - number
  * complete - boolean