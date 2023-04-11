const {Analyze} = require("../models/Analyze.model");

module.exports.getColleague = async (req, res) => {
    console.log("getAnalyze: ",req.user);
    const analyze = await Analyze.find({owner: req.user._id})
    return res.status(200).json(analyze);
}

module.exports.updateColleague = async (req, res) => {
    console.log("updateAnalyze: ",req.params.id);
    const analyze = await Analyze.findByIdAndUpdate({_id: req.params.id},{ ...req.body }, {returnDocument: "after"})
    return res.status(200).json(analyze);
}

module.exports.addColleague = async (req, res) => {
    console.log("addExperience: ",req.user);
    const analyze = await Analyze.create({...req.body } )
    return res.status(200).json(analyze);
}

module.exports.deleteColleague = async (req, res) => {
    console.log("deleteExperience: ",req.user);
    const analyze = await Analyze.findByIdAndDelete({_id: req.params.id})
    return res.status(200).json(analyze);
}