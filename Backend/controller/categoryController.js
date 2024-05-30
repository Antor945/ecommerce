const categoryList = require("../model/categorySchema");

async function categoryController(req, res) {
    const { name, description } = req.body;

    const data = await categoryList.findOne({ name });
    if (data) {
        return res.send("This name is already in use.")
    }
    const category = new categoryList({
        name,
        description
    });
    category.save()
    res.send("Category created successfully.")
}

module.exports = categoryController;