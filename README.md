
[![Test Coverage](https://api.codeclimate.com/v1/badges/dd7eaa156386a05a0b07/test_coverage)](https://codeclimate.com/github/Robertishimwe/server/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/dd7eaa156386a05a0b07/maintainability)](https://codeclimate.com/github/Robertishimwe/server/maintainability)

# MY-BRAND-API

### Developed By
[Ishimwe robert](https://github.com/Robertishimwe)

### Description
My brand api is background engine for my portfolio website. it runs on NodeJs using MongoDB as database with Mongoose as the ORM. I am using JWT for handling authentications and JOI for Validating inputs from the user before they are sent to the server and Bcrypt for hashing passwords stored in the database.

### Technologies Used

1. Node js
2. Express
3. Mongodb
4. Mongoose 
5. Jwt
6. bcrypt
7. Mocha

### Software Requirements

* Visual studio (or any other code editor)
* node js
* Mongodb

### Setup/Installation Requirements

* Open your terminal
* initialize github, git clone ` https://github.com/Robertishimwe/server `
* cd server
* open folder in prefered IDE
* open terminal
* Create a new file .env at the root of your project and configure your environment variables accordingly.
* Run `npm install ` to install all Dependencies
* Run in terminal `npm start` to start the sever
* Run the application in your localhost provided


### Road map
-  src
   - app.js
   - controllers
     - blogControllers.js
     - contact.js
     - usersController.js
   - models
      - blog.js
     - contact.js
     - user.js
   - routes
     - blogRoute.js
     - contact.js
     - userRoute.js
   - middlewares
       - autenticator.js
       - blogValidation.js
      -  commentValidation.js
      - contactValidation
      - usersValidation
   - .babelrc
   - .env
   - package.json
   - README.md




### Known Bugs
No bug known. If you found any, please contact!

### Contacts
Email: robertishimwe0@gmail.com



### License
This project is under the [MIT](https://github.com/Robertishimwe) license.

##### Copyright (c) 2022 ISHIMWE ROBERT.
