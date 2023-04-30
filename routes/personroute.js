const express = require('express')
const router = express.Router();
const { persons, getallPersons, getSinglePerson, deletePerson, updatePerson } = require('../controllers/personController')
const path = require('path');

router.route('/persondata').post(persons);
router.route('/all').get(getallPersons);
router.route('/single/:id').get(getSinglePerson);
router.route('/delete/:id').delete(deletePerson);
router.route('/update/:id').put(updatePerson);

module.exports = router;