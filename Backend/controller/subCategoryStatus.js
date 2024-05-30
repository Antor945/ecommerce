const subCategoryList = require("../model/subCategorySchema");

async function subCategoryStatus(req, res) {
    const { name, status } = req.body;
    console.log(name,status,'rtrtertert');
    if (status == "reject" || status == "waiting") {
        await subCategoryList.findOneAndUpdate(
            { name },
            { $set: { isActive: false, status: status } },
            { new: true },
        )
        res.send("status update successful")
    }else if(status =="approved"){
        await subCategoryList.findOneAndUpdate(
            { name },
            { $set: { isActive: true, status: status } },
            { new: true },
        )
        res.send("stutas approved")
    }
}
module.exports = subCategoryStatus;