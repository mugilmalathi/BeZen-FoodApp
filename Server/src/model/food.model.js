const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    id : {type:String},
    img : {type: String},
    desc : {type : String},
    ingredients : {type : String},
    steps : {type : String}
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("food", foodSchema)