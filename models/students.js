const { mongoose } = require ('../config');
const { Schema } = mongoose;

// creating a new student schema 
const studentSchema = new Schema({
    name: {type: String, required: true},
    dob: {type: Date, required: true},
    gender: {type: String, enum: ['female', 'male', 'prefer not to say'], default:'female' }
});

// exporting the schema
const Student = mongoose.model('Student', studentSchema);
module.exports = { Student };