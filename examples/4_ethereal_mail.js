nodemailer.createTestAccount((err, account) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      // Generated ethereal user
      user: account.user,
      // Generated ethereal password
      pass: account.pass,
    },
  });

  transporter.sendMail(mailOptions, (info) => {
    console.log("Preview URL: " + nodemailer.getTestMessageUrl(info));
  });
});
