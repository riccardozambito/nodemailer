# node-nodemailer


Example React, Node.js, Express app to send email with module Nodemailer.
It's configured with webpack, eslint, prettier and babel.

The [Examples folder](https://github.com/riccardozambito/nodemailer/tree/master/examples) contains the final source code of ["Send emails with Node.js module Nodemailer" gist](https://gist.github.com/riccardozambito/8c96ca5b9decf011f77f51a1d65eef4d).


## Structure
All the source code will be inside [src directory](https://github.com/riccardozambito/nodemailer/tree/master/src). Inside src, there is client and server directory. All the frontend code will be in [client directory](https://github.com/riccardozambito/nodemailer/tree/master/src/client). Backend Node.js code will be in the [server directory](https://github.com/riccardozambito/nodemailer/tree/master/src/server).  

The React front end includes two simple component: [App](https://github.com/riccardozambito/nodemailer/tree/master/src/client/component/App.js) and [Email Form](https://github.com/riccardozambito/nodemailer/tree/master/src/client/component/EmailForm.js). The call to Node.js backend is done in [../client/services/mailer.js](https://github.com/riccardozambito/nodemailer/tree/master/src/client/services/mailer.js).

The server back-end handles the POST request to send email in [../server/routes/mailer.js](https://github.com/riccardozambito/nodemailer/tree/master/src/server/routes/mailer.js). The logic needed to send email with **Nodemailer** is contained in [../server/service/mailer/mailer.js](https://github.com/riccardozambito/nodemailer/tree/master/src/server/service/mailer/mailer.js)  
 
 
## Start

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
