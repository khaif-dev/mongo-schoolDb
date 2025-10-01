// CRUD functionalites
// importing required files
const { connectDB, mongoose } = require('./config');
const { Student } = require('./models/students');
const { Teacher } = require('./models/teachers');
const { Subject } = require('./models/subjects');
const { Department } = require('./models/subjects');

async function main(){
    // wait for database to connect
    await connectDB(); 
    
    // Create
    const Jonte = await Teacher.create({ name: "Jonte Fresh", gender: "male"});
    const Mueni = await Teacher.create({ name: "Mueni Gloria"});

    console.log("created:", Jonte, Mueni);

    // read
    const student = await Student.find().select("name gender");
    console.log('students', student);

    const teacher = await Teacher.find().select("name gender");
    console.log("teachers", teacher);

    // update 
    await Teacher.updateOne({name: "Peter Andrew"}, {gender: "male"});
    console.log("updated peters gender");

    // delete
    await Teacher.deleteMany({name: "Jonte Fresh"});
    console.log("deleted jonte");

}

main();