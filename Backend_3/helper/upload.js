const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
      cb(null, 'public/img')
    },
    filename: (req, file, cb)=> {
      cb(null, `${file.fieldname}-${Date.now()}.png`)
    }
  })
   
const upload = multer({ 
  storage,
  limits: {fileSize: 100000}, // in byte
  fileFilter(req,file,cb){
    if(file.originalname.match(/\.(jpg|jpeg|png)\b/)){
      cb(null,true)
    }else{
      cb('image must be jpg jpeg or png',null)
    }
  }
})

module.exports = upload