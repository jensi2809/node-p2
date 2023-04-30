const mongoose = require('mongoose')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
require('./db/connection')
const port = process.env.PORT || 3004;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ status: 200, message: "Stage server is running" });
});

app.use("/person/api", require("./routes/personroute"))

app.listen(port, (err) => {
  if (err) {
    console.log("something wrong");
    return "failed";
  }
  console.log("server running on port:", port);
});









// const mongoose = require('mongoose')
// const express = require("express");
// const app = express();
// require('dotenv').config();
// const port = process.env.PORT || 3004;
// mongoose.connect(process.env.DATABASE)

// let Schema = mongoose.Schema;
// let PersonSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   age: Number,
//   favoriteFoods: [String]
// })

// let Person = mongoose.model('Person', PersonSchema)

// const PersonList = new Person({
//   name: 'EDOUKA EPOH WILFRID',
//   age: 34,
//   favoriteFoods: ['ananas', 'bananas', 'cakes']
// })

// PersonList.save()

// // const createAndSavePerson = () => {
// //   console.log('start');
// //   let person = new Person();
// //   person.save(function(err, data) {
// //     console.log('data', data);
// //     if(err){
// //       console.log(err)
// //     }else{
// //       console.log(data)
// //     }
// //   });  
// // };

// Person.createCollection().then(function (collection) {
//   console.log('Collection is created!');
// });

// const createManyPeople = (arrayOfPeople, done) => {
//   done(null /*, data*/);
// };

// const findPeopleByName = (personName, done) => {
//   done(null /*, data*/);
// };

// const findOneByFood = (food, done) => {
//   done(null /*, data*/);
// };

// const findPersonById = (personId, done) => {
//   done(null /*, data*/);
// };

// const findEditThenSave = (personId, done) => {
//   const foodToAdd = "hamburger";

//   done(null /*, data*/);
// };

// const findAndUpdate = (personName, done) => {
//   const ageToSet = 20;

//   console.log('ageToSet', ageToSet);

//   done(null /*, data*/);
// };

// const removeById = (personId, done) => {
//   done(null /*, data*/);
// };

// const removeManyPeople = (done) => {
//   const nameToRemove = "Mary";

//   done(null /*, data*/);
// };

// const queryChain = (done) => {
//   const foodToSearch = "burrito";

//   done(null /*, data*/);
// };


// /** **Well Done !!**
// /* You completed these challenges, let's go celebrate !
//  */

// //----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------



// exports.PersonModel = Person;
// // exports.createAndSavePerson = createAndSavePerson;
// exports.findPeopleByName = findPeopleByName;
// exports.findOneByFood = findOneByFood;
// exports.findPersonById = findPersonById;
// exports.findEditThenSave = findEditThenSave;
// exports.findAndUpdate = findAndUpdate;
// exports.createManyPeople = createManyPeople;
// exports.removeById = removeById;
// exports.removeManyPeople = removeManyPeople;
// exports.queryChain = queryChain;

// app.listen(port, (err) => {
//   if (err) {
//     console.log("something wrong");
//     return "failed";
//   }
//   console.log("server running on port:", port);
// });