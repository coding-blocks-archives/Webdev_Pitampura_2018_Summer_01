const {Student} = require('../db/models')

module.exports = {
  getAllStudents: async () => await Student.findAll(),
  createStudent: async (studentName) => await Student.create({
    name: studentName
  })
}