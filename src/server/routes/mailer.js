module.exports = (app) => {
  const sendEmail = require("./../service/mailer/mailer.js");

  app.post("/email/send", async (req, res) => {
    try {
      await sendEmail(req.body);
      res.sendStatus(200);
    } catch (ex) {
      res.sendStatus(500);
    }
  });
};
