const VarientSchema = require("../model/VarientSchema");
const productSchema = require("../model/productSchema");

async function variantControler(req, res) {

    const { variantName, price, storage, ram,size, color, image, product } = req.body
    console.log(variantName);

    const variant = new VarientSchema({
        variantName,
        price,
        storage,
        ram,
        color,
        size,
        image: `http://localhost:8000/upload/${req.file.filename}`,
        product
    });
    variant.save()
    res.send("variant create successful")
    await productSchema.findByIdAndUpdate(

        { _id: variant.product },
        { $push: { variant: variant._id } },
        { new: true }
    )
}

async function getAllVariant(req, res) {
    data = await VarientSchema.find({});
    res.send(data)
}

module.exports = { variantControler, getAllVariant };