const {Student} = require('../db/models')

function getAllStudents () {
  const students = Student.findAll()
  return students
}