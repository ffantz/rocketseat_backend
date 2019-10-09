const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: (req, file, callback) => {
            // (error, 'filename')
            let filename = file.fieldname.replace(" ", "")
            // let filename = file.basename(file.originalnamem, ext).replace(" ", "")  // Keep the original filename
            let ext = path.extname(file.originalname)
            callback(null, `${filename}-${Date.now()}${ext}`);
        },
    }),
};