const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// Sender address
const your_email_address = "sender@domain.com";

// Recipient address
const send_to = "to@domain.com";

const credentials = require("./credentials.json");

const oauth2Client = new OAuth2(
  credentials.web.client_id,
  credentials.web.client_secret,
  credentials.web.redirect_uris
);

oauth2Client.setCredentials({
  refresh_token: "Your refresh token",
});

const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "your.gmail@gmail.com",
    clientId: credentials.web.client_id,
    clientSecret: credentials.web.client_secret,
    refresh_token: "Your refresh token",
    accessToken: accessToken,
  },
});

const mailOptions = {
  from: your_email_address,
  to: send_to,
  subject: "Invoice", // Subject line
  html: "You will find your invoice attached",
  attachments: [
    {
      // It should be replaced with the name  to be reported as the name of the attached file
      filename: "your invoice.pdf",
      // It should be replaced with your real path file
      path: process.cwd() + "/generated_invoices/customer_id/invoice.pdf",
    },
  ],
};

transporter.sendMail(mailOptions, (error, response) => {
  error ? console.log(error) : console.log(response);
  //
  if (smtpTransport) smtpTransport.quit();
});
