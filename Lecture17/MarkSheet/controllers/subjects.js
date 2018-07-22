const {Subject}  = require('../db/models')

module.exports = {
  getAllSubjects: async () => await Subject.findAll()
}