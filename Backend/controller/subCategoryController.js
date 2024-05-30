const categorySchema = require('../model/categorySchema');
const subCategoryList = require('../model/subCategorySchema')


async function subCategoryController(req, res) {
    const { name, description, category } = req.body;

    const existingName = await subCategoryList.findOne({ name });
    if (existingName) {
        return res.send("This name is already in use.")
    }
    const subCategory = new subCategoryList({
        name,
        description,
        category
    })
    subCategory.save();

    await categorySchema.findOneAndUpdate(
        { _id: subCategory.category },
        { $push: { subCategory: subCategory._id } },
        { new: true }
    )
    res.send('subcategory create successful');
}
module.exports = subCategoryController;