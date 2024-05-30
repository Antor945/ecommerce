const express = require('express');
const categoryController = require('../../controller/categoryController');
const subCategoryController = require('../../controller/subCategoryController');
const categoryStatus = require('../../controller/categoryStatus');
const subCategoryStatus = require('../../controller/subCategoryStatus');
const getCategory = require('../../controller/getCategory');
const getSubcategory = require('../../controller/getSubcategory');
const router = express.Router();


router.post('/createCategory', categoryController);
router.post('/subCategory', subCategoryController);
router.post('/categoryStatus', categoryStatus);
router.post('/subCategoryStatus', subCategoryStatus);

router.get('/getCategory', getCategory);
router.get('/getSubcategory', getSubcategory)

module.exports = router;