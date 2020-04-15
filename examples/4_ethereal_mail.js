nodemailer.createTestAccount((err, account) => {
  // Create transport object using the default SMTP transport
  let transport = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: account.user, // Generated ethereal user
      pass: account.pass, // Generated ethereal password
    },
  });

  transport.sendMail(mailOptions, (info) => {
    console.log("Preview URL: " + nodemailer.getTestMessageUrl(info));
  });
});
