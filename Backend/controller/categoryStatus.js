const categoryList = require("../model/categorySchema");

async function categoryStatus(req, res) {
    const { name, status } = req.body;
    if (status == "waiting" || status == "reject") {
        await categoryList.findOneAndUpdate(
            { name },
            { $set: { isActive: false, status: status } },
            { new: true }
        );
        res.send("status updated successful")
    } else if (status == "approved") {
        await categoryList.findOneAndUpdate(
            { name },
            { $set: { isActive: true, status: status } },
            { new: true }
        );
        res.send("status updated successful")
    };

};


module.exports = categoryStatus;