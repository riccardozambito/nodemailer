const nodemailer = require("nodemailer");

// Sender address
const your_email_address = "sender@domain.com";

// Recipient address
const send_to = "sender@domain.com";

// SMTP host
const your_host = "smtps.myhost.com";

// SMTP port
const port = 465;

const transporter = nodemailer.createTransport({
  host: your_host,
  secure: true,
  // Connection will use TLS when connecting to server.
  // in most cases set this value to true if you are connecting to port 465
  // for port 587 or 25 keep it false
  port: 465,
  auth: {
    // It should be replaced with real sender's account
    // Note: in code that go into production is extremely recommended
    // encrypt those data or use environment variables
    user: "user@domain.com",
    pass: "password",
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
