const route = require('express').Router()
const studentController = require('../../controllers/students')

route.get('/', async (req, res) => {
  res.status(200).json(await studentController.getAllStudents())
})

route.post('/', async (req, res) => {
  const newStudent = await studentController.createStudent(req.body.name)
  res.status(201).json(newStudent)
})

module.exports = route