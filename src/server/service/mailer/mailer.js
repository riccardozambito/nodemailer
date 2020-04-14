const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const nodemailer = require("nodemailer");

const credential = require("./credentials.json");
const config = require("./../config.json");

module.exports = async function sendEmail(options) {
  try {
    let transporter;
    //
    if (config.guser) {
      const oauth2Client = new OAuth2(
        credential.web.client_id,
        credential.web.client_secret,
        credential.web.redirect_uris
      );

      oauth2Client.setCredentials({
        refresh_token: config.refreshToken,
      });

      const accessToken = oauth2Client.getAccessToken();

      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: config.guser || "",
          clientId: credential.web.client_id,
          clientSecret: credential.web.client_secret,
          refreshToken: config.refreshToken,
          accessToken: accessToken,
        },
      });
    } else {
      transporter = nodemailer.createTransport({
        host: config.smtpServer,
        secure: true,
        port: config.smtpPort || 465,
        auth: {
          user: config.smtpUser,
          pass: config.smtpPass,
        },
      });
    }

    let mailOptions = {
      from: options.fromAddress || config.guser,
      to: options.toAddress,
      subject: options.subject,
      html: options.message,
    };

    if (!!options.attachment) {
      mailOptions.attachments = [
        {
          path: process.cwd() + "/src/server/resources/test.pdf",
        },
      ];
    }

    let success = await transporter.sendMail(mailOptions);

    if (success && success.accepted.length) return;
    else throw new Error("Email email not delivered");
  } catch (ex) {
    throw new Error(ex);
  }
};
