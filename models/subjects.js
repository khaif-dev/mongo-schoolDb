const { mongoose } = require('../config');
const { Schema } = mongoose;

const subjectSchema = new Schema({
    name: {type: String, required: true}
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = { Subject };