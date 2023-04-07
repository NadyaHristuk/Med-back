const {Experience} = require("../models/Experience.model");

module.exports.getAppointment = async (req, res) => {
    console.log("getExperience: ",req.user);
    const experience = await Experience.find({owner: req.user._id})
    return res.status(200).json(experience);
}

module.exports.updateAppointment = async (req, res) => {
    console.log("updateExperience: ",req.params.id);
    const experience = await Experience.findByIdAndUpdate({_id: req.params.id},{ ...req.body }, {returnDocument: "after"})
    return res.status(200).json(experience);
}

module.exports.addAppointment = async (req, res) => {
    console.log("addExperience: ",req.user);
    const experience = await Experience.create({...req.body } )
    return res.status(200).json(experience);
}

module.exports.deleteAppointment = async (req, res) => {
    console.log("deleteExperience: ",req.user);
    const experience = await Experience.findByIdAndDelete({_id: req.params.id})
    return res.status(200).json(experience);
}