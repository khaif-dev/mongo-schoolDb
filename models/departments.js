const { mongoose } = require ('../config');
const { Schema } = mongoose;

// creating the schema
const departmentSchema = new Schema({
    name: {type:String, required:true}
});

const Department = mongoose.model('Department', departmentSchema);
module.exports = { Department };