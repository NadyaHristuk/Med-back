const {Schema, model} = require("mongoose");

const ExperienceSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId
        },
    ImgUrl: String,
    title: String,
    description: String,
    date: {
        start: String,
        end: String,
    },
})

const Experience = model("Experience", ExperienceSchema);
module.exports = {
    Experience
};