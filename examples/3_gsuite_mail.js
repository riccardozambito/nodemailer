const nodemailer = require("nodemailer");

// Sender address
const your_email_address = "sender@domain.com";

// Recipient address
const send_to = "sender@domain.com";

const credentials = require("./credentials.json");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "your.gmail@gmail.com",
    serviceClient: credentials.client_id,
    privateKey: credentials.private_key,
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
