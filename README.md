# The Shortcutter's Coding Challenge


## URL Shortener
Developed a service that lets users create short URLs (like Bitly, Rebrandly, etc.) for their original links. This service let any user use shortened URLs by clicking on it (redirects to original URLs) and user can see all the created short URLs.

## Tech Stack
React
Node.js
Express
MongoDB

## Prerequisites 
Make sure you have the LTS version of Node installed.
Install git for version control.
Install MongoDB.

## Deployment
Step 1: Clone this repo.
Step 2: cd shorturlclient
Step 4: While in the shorturlclient directory, install the frontend dependencies using npm install.
Step 5: cd shorturlserver
Step 6: While in the server directory, install the backend dependencies using npm install.
Step 7: connect MongoDB with project using following steps:
       Login mongoDB account->Create a project-> Build database->Create cluster->Create user with user name and password-> Add your IP address to access list 
       Go to database-> connect->connect your application->copy the connection string and paste it to by creating an .env file inside shorturlserver directory(add URL= before connection string and replace password with original)
Step 8: Inside the server directory(shorturlserver), run the backend server using node server.js or using nodemon run server.js. The backend server will start on localhost:5000.
Step 9: While backend server is still running, open a new tab on the terminal and cd to the client project directory i.e. shorturlclient.
Step 10: Finally start the react app using npm start. The app will start on port 3000 which can be accessed through http://localhost:3000/.

