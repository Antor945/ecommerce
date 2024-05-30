const Category = require('../model/categorySchema')

async function getCategory(req, res) {
    const data = await Category.find({}).populate('subCategory')
    res.send(data)
}
module.exports = getCategory;