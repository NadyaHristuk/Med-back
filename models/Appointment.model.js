const {Schema, model} = require("mongoose");

const AppointmentSchema = new Schema(
    {
        patient: String,
        doctor: String,
        date: String,
    }
);

const Appointment = model("Appointment", AppointmentSchema);
module.exports = {
    Appointment
};