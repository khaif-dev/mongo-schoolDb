const { mongoose } = require ('../config');
const { Schema } = mongoose;

// creating the techers schema
const teacherSchema = new Schema ({
    name: {type: String, required:true },
    gender: {type: String, enum:['female', 'male', 'prefer not to say'], default:'female'}
});

const Teacher = mongoose.model('Teacher', teacherSchema );
module.export = { Teacher };