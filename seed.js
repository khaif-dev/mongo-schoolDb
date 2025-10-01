// Adds data to the database 
// importing mongoose and the schemas
const { mongoose, connectDB } = require('./config');
const { Student } = require('./models/students');
const { Teacher } = require('./models/teachers');
const { Department } = require('./models/departments');
const { Subject } = require ('./models/subjects');

async function create(){
    // wait to connect to database before crud
    await connectDB();

    // delete entries
    await Student.deleteMany();
    await Teacher.deleteMany();
    await Subject.deleteMany();
    await Department.deleteMany();

    // wait for student data
    await Student.insertMany([
        // insert multiple documents to the student collection
        {name:"Joy Murithi", dob:new Date("2005.01.19") ,gender:"female"},
        {name: "John Doe", dob:new Date("2005.02.26") ,gender: "male"}
    ]);

    await Teacher.insertMany([
        {name:"Jane Doe", gender:"female"},
        {name: "Peter A ndrew"}
    ]);

    await Subject.insertMany([
        {name: "Math"},
        {name: "English"},
        {name: "Kiswahili"},
        {name: "Biology"},
        {name: "Chemistry"},
        {name: "Physics"},
        {name: "Geography"},
        {name: "History"},
        {name: "Computer"}
    ]);

    await Department.insertMany([
        {name: "Math"},
        {name: "Language"},
        {name: "Science"},
        {name: "Humanity"}
    ]);


    console.log('data populated');
    // disconnect the database
    await mongoose.disconnect();
    
}

create();