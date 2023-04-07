const {Info} = require("../models/Info.model");

module.exports.getInfo = async (req, res) => {
    console.log("getExperience: ",req.user);
    const info = await Info.find({owner: req.user._id})
    return res.status(200).json(info);
}

module.exports.updateInfo = async (req, res) => {
    console.log("updateExperience: ",req.params.id);
    const info = await Info.findByIdAndUpdate({_id: req.params.id},{ ...req.body }, {returnDocument: "after"})
    return res.status(200).json(info);
}

module.exports.addInfo = async (req, res) => {
    console.log("addExperience: ",req.user);
    const info = await Info.create({...req.body } )
    return res.status(200).json(info);
}

module.exports.deleteInfo = async (req, res) => {
    console.log("deleteExperience: ",req.user);
    const info = await Info.findByIdAndDelete({_id: req.params.id})
    return res.status(200).json(info);
}