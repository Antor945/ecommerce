const discountSchema = require("../model/discountSchema");

function productdiscount(req, res) {
    const { percent, cash, product } = req.body;
    console.log(cash);

    const discountData = new discountSchema({
        percent,
        cash,
        product
    })
    discountData.save();
    res.send("discount create successfull")
};


async function getallDiscount(req,res) {
    const discount = await discountSchema.find({})
    res.send(discount)
}

module.exports = { productdiscount, getallDiscount };

