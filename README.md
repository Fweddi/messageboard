![Travis build status](https://travis-ci.com/Fweddi/messageboard.svg?branch=master)

This project is a messageboard designed using Node.js, React and MySQL technologies. It is hosted on Heroku and is using Travis for CI.

To start locally:
1. in your CLI, run `git clone https://github.com/Fweddi/messageboard.git` to clone the repository
2. `cd messageboard` to change into the root directory

To run the front-end:
1. `npm i` to install node dependencies
2. `npm run startClient` 

To run the back-end (in a separate CLI tab or window):
1. `cd api` to change into the backend directory
2. `npm i` to install node dependencies
3. `npm start`

You will need environment variables which you can get by asking myself. To run tests on the database you will need to set up a local MySQL database. Tests on the frontend can be accessed by running `npm test` in the root directory. To test the backend you must change into the api directory, and run `npm test` there.

