// const {  } = require ('../../helper/env')
// const bcrypt = require('bcrypt')

// const jwt = require ('jsonwebtoken')
// const nodeMailer = require ('nodemailer')

// const usersController = {
//     registerCtr: async(req, res) => {
//         const body = req.body

//         const salt = await bcrypt.genSalt(10)
//         const hasPassword = await bcrypt.hash(body.password, salt)

//         const data = {
//           email: body.email,
//           password: hasPassword,
//           address: body.address,
//           phone_number: body.phone_number,
//           level: body.level,
//           status: body.status,
//           image: body.image,
//         }
//         usersModel.register(data)
//         .then((result) => {
//             success(res, result, 'Register Success')
//         })
//         .catch((err) => {
//             failed(res, [], err.message)
//         })
//     },
//     loginCtr: async(req, res) => {
//       const body = req.body
//       usersModel.login(body)
//       .then(async(result) => {
//           const results = result[0]
//           const password = results.password
//           const isMatch = await bcrypt.compare(body.password, password)
//           if(isMatch){
//             const email = {email: results.email}
//             const refresToken = jwt.sign(email, TOKENREFREST)
//             tokenRefres.push(refresToken)
//             const token = generateToken(email)
            
//             const dataToken = { 
//               token,
//               refresToken 
//             }
//             success(res, dataToken, 'Login Success')
//           }else{
//             failed(res, [], 'Wrong password/email')
//           }
//       })
//       .catch((err) => {
//           failed(res, [], err.message)
//       })
//     },
//     tokenRefres: (req, res) => {
//       const tokenRequest = req.body.tokenRequest
//       if(tokenRequest === ''){
//         console.log('gagal')
//       }else{
//         jwt.verify(tokenRequest, TOKENREFREST, (err, result) => {
//           const newToken = generateToken({email: result.email})
//           res.json({newToken})
//         })
//       }
//     }
// }

// const generateToken = (email) => {
//   return jwt.sign(email, JWTSECRET, {expiresIn:'10h'})
// }

//   registerCtr: async (req, res) => {
//       const body = req.body;
//       const salt = await bycrpt.genSalt(10);
//       const hash = await bycrpt.hash(body.password, salt);
//       const data = {
//           email: body.email,
//           password: hash,
//           level: body.level,
//       };
//       registerModel(data)
//           .then(() => {
//               // SEND EMAIL
//               const hash = jwt.sign({ email: data.email }, JWT_REGIS)
//               let transporter = nodeMailer.createTransport({
//                   host: 'smtp.gmail.com',
//                   port: 587,
//                   secure: false,
//                   requireTLS: true,
//                   auth: {
//                       // ENV
//                       user: EMAIL,
//                       pass: PASSWORD
//                   }
//               })

//               let mailOptions = {
//                   from: '👻'+ EMAIL,
//                   to: data.email,
//                   subject: `Hello ${data.email} ✔ `,
//                   html: `
//                   Please activation of email !<br>
//                   <a href="${URL_LOKAL}/users/verify/${hash}">Activasi</a>
//                    `
//               }
//               transporter.sendMail(mailOptions, (err, sukses) => {
//                   if (err) {
//                       res.status(500)
//                       failed(res, [], err.message);
//                   } else {
//                       success(res, [sukses], 'Oke')
//                   }
//               })
//               res.json({
//                   Message: 'Success registration, Please activation of email! '
//               })
//           })
//           .catch((err) => {
//               res.status(500)
//               failed(res, [], err.message);
//           });
//   },
//   /////////////////////////////////////CONTROLLER///////////////////////////////
//   // Login
//   loginCtr: (req, res) => {
//       const body = req.body;
//       loginModel(body)
//           // Kasih tau bahwa didalam fungsi yg parameter result ada proses asynchronous
//           .then(async (result) => {
//               const sukses = result[0];
//               if (sukses) {
//                   if (sukses.is_active === 1) {
//                       const passwordDatabase = sukses.password;
//                       const id = sukses.id;
//                       const email = sukses.email;
//                       const emailHash = {
//                           id: sukses.id,
//                           email: sukses.email,
//                           level: sukses.level
//                       };
//                       const level = sukses.level;
//                       const match = await bycrpt.compare(body.password, passwordDatabase);
//                       if (match) {
//                           const refreshToken = jwt.sign(emailHash, JWT_REFRESH);
//                           const getToken = generateToken(emailHash);
//                           if (sukses.refreshToken === null || sukses.refreshToken === "") {
//                               UpdateRefreshToken(refreshToken, id)
//                                   .then(() => {
//                                       if (level === 0) {
//                                           tokenResult(res, { id, email, level, accessToken: getToken, refreshToken: refreshToken }, "Login Success, you are logged in as Admin");
//                                       } else {
//                                           tokenResult(res, { id, email, level, accessToken: getToken, refreshToken: refreshToken }, "Login Success, you are logged in as User"
//                                           );
//                                       }
//                                   })
//                                   .catch((err) => {
//                                       res.status(500)
//                                       failed(res, [], err.message)
//                                   });
//                           } else {
//                               if (level === 0) {
//                                   tokenResult(res, { id, email, level, accessToken: getToken, refreshToken: sukses.refreshToken, }, "Login Success, you are logged in as Admin");
//                               } else {
//                                   tokenResult(res, { id, email, level, accessToken: getToken, refreshToken: sukses.refreshToken, }, "Login Success, you are logged in as User");
//                               }
//                           }
//                       }else{
//                           res.status(500)
//                           notFound(res, [], "Wrong password");
//                       }
//                   } else {
//                       res.status(403)
//                       notFound(res, [], "Email has not been activated");
//                   }
//               } else {
//                   res.status(404)
//                   notFound(res, [], "Email has not been registered");
//               }
//           })
//           .catch((err) => {
//               res.status(500)
//               failed(res, [], err.message);
//           });
//   },
//   refreshToken: (req, res) => {
//     const newToken = req.body.token;
//     if (newToken) {
//         jwt.verify(newToken, JWT_REFRESH, (err, result) => {
//             const refReshTOKEN = generateToken({ email: result.email,level:result.level });
//             tokenResult(res, { newToken: refReshTOKEN, }, "Refresh token success");
//         });
//     } else {
//         res.status(401)
//         tokenFailed(res, false, [], "Token is required!");
//     }
//   },
//   verify: (req, res) => {
//     const token = req.params.token
//     if (token) {
//         jwt.verify(token, process.env.JWT_REGIS, (err, decode) => {
//             if (err) {
//                 res.status(500)
//                 failed(res, [], 'Failed Activation!')
//             } else {
//                 const email = decode.email
//                 getUsers(email)
//                     .then((result) => {
//                         if (result.affectedRows) {
//                             success(res, { email }, 'Congratulation, Your account has been created!')
//                         }
//                         res.status(500)
//                         failed(res, [], 'Failed activation')
//                     })
//                     .catch((err) => {
//                         res.status(500)
//                         failed(res, [], err.message)
//                     });
//             }
//         })
//     }
//   }
// }

// function generateToken(emailHash) {
//   return jwt.sign(emailHash, JWT_PRIVATE, {
//       expiresIn: 1800,
//   });
// }

// module.export = usersController