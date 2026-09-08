const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `Image-${Date.now()}-${file.originalname}`)
    }
})


const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/") || file.mimetype === "application/octet-stream") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
console.log("fileFilter", fileFilter)

const multerMiddleware = multer({
    storage,
    fileFilter
})

module.exports = multerMiddleware