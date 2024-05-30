const express = require('express');
const { productController,
  secureUploadProduct,
  getAllProduct,
  deleteProduct
} = require('../../controller/productController');

const {variantControler,getAllVariant} = require('../../controller/varinatController');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.originalname.split(".").pop());
  }
});

const upload = multer({ storage: storage });

// router.use('/productController',secureUploadProduct,productController)
router.use('/productController', productController);
router.use('/productvariant', upload.single('image'), variantControler);

router.get("/getAllProduct", getAllProduct);
router.get("/getAllVariant", getAllVariant);

router.post("/deleteProduct", deleteProduct);



module.exports = router