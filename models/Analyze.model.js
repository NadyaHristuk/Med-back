const {Schema, model} = require("mongoose");

const AnalyzeSchema = new Schema(
    {
        patient: String,
        doctor: String,
        dateStart: Date,
        dateEnd: Date,
        result: String,
    }
);

const Analyze = model("Analyze", AnalyzeSchema);
module.exports = {
    Analyze
};