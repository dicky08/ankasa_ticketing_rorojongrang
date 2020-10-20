const nodeMailer = require('nodemailer')
const jwt = require('jsonwebtoken')
// Call Env
const { JWT_REGIS, JWT_PRIVATE, EMAIL, PASSWORD, JWT_REFRESH, URL_LOKAL } = require('./env')
const sendingEmail = {
   // Send Email
   emailSend: (email) => {
    const hasJwt = jwt.sign({ email: email }, JWT_REGIS)
    let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        // ENV EMAIL PASSWORD 
        user: EMAIL,
        pass: PASSWORD
      }
    })
    let mailOptions = {
      from: '👻' + EMAIL,
      to: email,
      subject: `Hello ${email} ✔ `,
      html: `Please activation of email ! <br>
      <a href="${URL_LOKAL}/api/users/verify/${hasJwt}"> Activation</a>
      `
    }
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        failed(res, [], err.message)
      } else {
        success(res, response, 'Success Register EMAIL')
      }
    })
   }
}
module.exports = sendingEmail