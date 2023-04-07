const {Schema, model} = require("mongoose");

const UserInfoSchema = new Schema(
    {
        coast: Number,
        about: String,
        specialization: String,
        category: String,
        gender: String,
        birthday: Date,
    }
);

const UserInfo = model("UserInfo", UserInfoSchema);
module.exports = {
    UserInfo
};