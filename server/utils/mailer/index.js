nodemailer = require('nodemailer')
require('dotenv').config();


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.REACT_APP_EMAIL,
    pass: process.env.REACT_APP_WORD,
    clientId: process.env.REACT_APP_OAUTH_CLIENTID,
    clientSecret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
    refreshToken: process.env.REACT_APP_OAUTH_REFRESH_TOKEN,
    accessToken: process.env.REACT_APP_OAUTH_ACCESS_TOKEN,
  },
});


const send = (email, senderName, subject, text) => {
  const from = senderName && email ? `${senderName} <${email}>` : `${senderName || email}`
  const message = {
    from,
    to: 'nelsontjohns@gmail.com',
    subject,
    text,
    replyTo: from
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send;
