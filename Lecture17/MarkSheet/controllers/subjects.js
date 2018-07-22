const {Subject}  = require('../db/models')

module.exports = {
  getAllSubjects: async () => await Subject.findAll(),
  addSubject: async(name, maxMarks) =>
    await Subject.create({name, maxMarks}),
}