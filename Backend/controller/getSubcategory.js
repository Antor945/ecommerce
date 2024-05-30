const subCategoryList = require("../model/subCategorySchema");

async function getSubcategory(req, res) {
  const data = await subCategoryList.find({})
  res.send(data)
}
module.exports = getSubcategory;