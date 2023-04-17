import 'dotenv/config';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path'

import { VERIFICATION_URL } from './config.js';

const transporter = nodemailer.createTransport({
  pool: true,
  host: 'mail.webdesignsbytom.com',
  port: 465,
  secure: true, // use TLS
  auth: {
    type: 'login',
    user: process.env.AUTH_EMAIL,
    pass: process.env.VERIFY_PASS,
  },
});

const resetTransporter = nodemailer.createTransport({
  pool: true,
  host: 'mail.webdesignsbytom.com',
  port: 465,
  secure: true, // use TLS
  auth: {
    type: 'login',
    user: process.env.RESET_EMAIL,
    pass: process.env.RESET_PASS,
  },
});

export async function sendVerificationEmail(id, email, uniqueString) {
  const clientUrl = process.env.VERIFICATION_URL;
  console.log('client url: ' + clientUrl);

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: 'Please verify Your Email',
    html: `
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style='height: 100vh;'>
          <div style='background-color: lightblue;'>
            <h1>Thank you for signing up with webdesignsbytom</h1>
            <h2>${clientUrl + '/users/verify/' + id + '/' + uniqueString}</h2>
            <p>Please verify your email address to complete the signup and login into your account.</p><p>This link <b>expires in 6 hours</b>.</p><p>Press <a href=${
              clientUrl + '/users/verify/' + id + '/' + uniqueString
            }>here</a> to proceed.</p>
          </div>
        </body>
      </html>
    `,
  };
  console.log('url: ', clientUrl + '/verify/' + id + '/' + uniqueString);
  try {
    transporter.sendMail(mailOptions);
  } catch (err) {
    throw err;
  }
}

export async function sendResetPasswordEmail(id, email, uniqueString) {
  const clientUrl = process.env.VERIFICATION_URL;
  console.log('client url: ' + clientUrl);

  const mailOptions = {
    from: process.env.RESET_EMAIL,
    to: email,
    subject: 'Password Reset',
    html: `
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style='height: 100vh;'>
          <div style='background-color: lightblue;'>
            <h1>Reset password link</h1>
            <h2>${
              clientUrl +
              '/users/reset-lost-password/' +
              id +
              '/' +
              uniqueString
            }</h2>
            <p>Please follow this link to reset your password</p><p>This link <b>expires in 6 hours</b>.</p><p>Press <a href=${
              clientUrl +
              '/users/reset-lost-password/' +
              id +
              '/' +
              uniqueString
            }>here</a> to proceed.</p>
          </div>
        </body>
      </html>
    `,
  };
  console.log(
    'url: ',
    clientUrl + '/reset-lost-password/' + id + '/' + uniqueString
  );
  try {
    resetTransporter.sendMail(mailOptions);
  } catch (err) {
    throw err;
  }
}

export async function testEmail(email) {
  console.log('email: ', email);
  const clientUrl = process.env.VERIFICATION_URL;

  // point to the template folder
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve('./public/views/'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./public/views/'),
  };

  transporter.use('compile', hbs(handlebarOptions));

  var mailOptions = {
    from: process.env.AUTH_EMAIL, // sender address
    to: email, // list of receivers
    subject: 'Welcome!',
    template: 'email', 
    context: {
      title: 'Test Email',
      firstName: 'Tom', 
      confirmationUrl: 'www.webdesignsbytom.com'
    },
  };

  try {
    transporter.sendMail(mailOptions);
  } catch (err) {
    throw err;
  }
}
