"use strict";

const nodemailer = require('nodemailer');

module.exports = function (enviaEmail) {

  enviaEmail.post('/enviaEmail', (req, res) => {
    var from = req.body.from;
    var to = req.body.to;
    var password = req.body.senha;
    var msg = req.body.msg;
    var server = req.body.server;
    var port = req.body.porta;
    var tls = req.body.tls;


    // async..await is not allowed in global scope, must use a wrapper
    async function main() {

      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let account = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: server,
        port: port,
        secure: tls, // true for 465, false for other ports
        auth: {
          user: from,
          pass: password
        }
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: `${from}`, // sender address
        to: `${to}`, // list of receivers
        subject: "Contato Sigatec Informática ✔", // Subject line
        text: "Resposta", // plain text body
        html: `<p>${msg}</p>` // html body
      };

      // send mail with defined transport object
      let info = await transporter.sendMail(mailOptions)

      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      res.send('Email enviado com sucesso');
    }

    main().catch(console.error);


  });
}
