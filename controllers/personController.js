const Person = require('../models/PersonModel')
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");

// create persons
module.exports.persons = catchAsyncErrors(async (req, res, next) => {
  const PersonList = await Person.create(req.body)
  return res.status(200).json({
    status: true,
    PersonList,
  });
})

// get all persons
module.exports.getallPersons = catchAsyncErrors(async (req, res, next) => {
  let totalpersons = await Person.countDocuments();
  const PersonList = await Person.find()
  return res.status(200).json({
    status: true,
    total: totalpersons,
    PersonList,
  });
})

// get single person
module.exports.getSinglePerson = catchAsyncErrors(async (req, res, next) => {
  try {
    const PersonList = await Person.findById(req.params.id)
    if (!PersonList) {
      return next(new ErrorHandler("Persons Not Found", 404));
    } else {
      return res.status(200).json({
        status: true,
        PersonList,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message
    });
  }
})

// delete person
module.exports.deletePerson = catchAsyncErrors(async (req, res, next) => {
  try {
    const PersonList = await Person.findByIdAndDelete(req.params.id)
    if (!PersonList) {
      return res.status(400).json({
        message: "Person Not Found..."
      });
    }
    return res.status(200).json({
      message: "Person Deleted Successfully..."
    });
  } catch (error) {
    return res.status(500).json({ error })
  }
})

// update person
module.exports.updatePerson = catchAsyncErrors(async (req, res, next) => {
  try {
    const PersonList = await Person.findByIdAndUpdate(req.params.id)
    if (!PersonList) {
      return res.json({
        status: false,
        message: "Person Not Found..."
      })
    }
    const data = {
      name: req.body.name || PersonList.name,
      age: req.body.age || PersonList.age,
      favoriteFoods: req.body.favoriteFoods || PersonList.PersonList
    }
    const details = await Person.findByIdAndUpdate(req.params.id, data, {
      new: true
    })
    return res.status(201).json({
      status: true,
      details,
      message: "Person Updated Successfully...",
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      error: error.message,
    });
  }

})



