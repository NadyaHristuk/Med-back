const {Appointment} = require("../models/Appointment.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports.getAppointment = async (req, res) => {
    const query = {
        [req.user.role]: ObjectId(req.user._id),
    }
    if (req?.body?.date?.start) {
        query.date = {$gte:req.body.date.start};
    }
    if (req?.body?.date?.end) {
        query.date = {...query.date,$lt:req.body.date.end};
    }
    console.log(query)
    const appointment = await Appointment.find(query)
    return res.status(200).json(appointment);
}

module.exports.updateAppointment = async (req, res) => {
    console.log("updateAppointment: ", req.params.id);
    const appointment = await Appointment.findByIdAndUpdate({_id: req.params.id}, {...req.body}, {returnDocument: "after"})
    return res.status(200).json(appointment);
}

module.exports.addAppointment = async (req, res) => {
    console.log("addAppointment: ", req.user);
    // const app = await Appointment.findOne( { $or: [ { patient: ObjectId(req.body.patient) }, { doctor: ObjectId(req.user._id) } ]},{$and:{date: req.body.date} })
    // console.log(app);
    // const appointment = await Appointment.create({...req.body})
    return res.status(200).json({});
}

module.exports.deleteAppointment = async (req, res) => {
    console.log("deleteAppointment: ", req.user);
    const appointment = await Appointment.findByIdAndDelete({_id: req.params.id})
    return res.status(200).json(appointment);
}