const productSchema = require("../model/productSchema");
const productList = require("../model/productSchema");

function secureUploadProduct(req, res, next) {

    const secure = req.headers.authorization

    if (secure == "12345") {
        next()
    } else {
        res.send("invalid password")
    };
};

function productController(req, res) {
    const { name, description, store } = req.body;

    const product = new productList({
        name,
        description,
        store
    })
    product.save();

    res.send(" Product create suscessful")
};

async function getAllProduct(req, res) {
    const productData = await productSchema.find({}).populate('variant');
    res.send(productData);
};

async function deleteProduct(req, res) {
    const { id } = req.body;
    const data = await productSchema.findByIdAndDelete(id)
};

module.exports = { productController, secureUploadProduct, getAllProduct, deleteProduct };