const {Exam} = require('../db/models')

module.exports = {
  getAllExams: async () => await Exam.findAll()
}