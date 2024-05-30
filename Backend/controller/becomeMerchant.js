const merchantSchema = require("../model/merchantSchema");
const userSchema = require("../model/userSchema");

async function becomeMerchant(req, res) {

    const { storename, officialemail, officialphone, address, owner, product } = req.body
    const data = new merchantSchema({
        storename,
        officialemail,
        officialphone,
        address,
        owner,
        product
    })
    data.save();
    await userSchema.findOneAndUpdate(
        { _id: owner },
        { userType: "merchant" },
        { new: true }
    )
    res.send("Congratulation your merchant");
}
 async function getAllsotreController(req,res) {

  const data = await merchantSchema.find({});
  res.send(data)

}
module.exports = {becomeMerchant,getAllsotreController};