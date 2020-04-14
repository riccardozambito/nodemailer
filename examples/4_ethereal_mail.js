nodemailer.createTestAccount((err, account) => {
  // Create transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: account.user, // Generated ethereal user
      pass: account.pass, // Generated ethereal password
    },
  });

  transporter.sendMail(mailOptions, (info) => {
    console.log("Preview URL: " + nodemailer.getTestMessageUrl(info));
  });
});
