const {Experience} = require("../models/Experience.model");

module.exports.getExperience = async (req, res) => {
    console.log("getExperience: ",req.user);
    const experience = await Experience.find({owner: req.user._id})
    return res.status(200).json(experience);
}

module.exports.updateExperience = async (req, res) => {

    console.log("updateExperience: ",req.params.id);
    const experience = await Experience.findByIdAndUpdate({_id: req.params.id},{ ...req.body }, {returnDocument: "after"})
    return res.status(200).json(experience);
}

module.exports.addExperience = async (req, res) => {
    console.log("addExperience: ",req.user);
    const experience = await Experience.create({...req.body, owner: req.user } )
    return res.status(200).json(experience);
}

module.exports.deleteExperience = async (req, res) => {
    console.log("deleteExperience: ",req.user);
    const experience = await Experience.findByIdAndDelete({_id: req.params.id})
    return res.status(200).json(experience);
}