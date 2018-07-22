const {Paper} = require('../db/models')

module.exports = {
  getPapersForExam: async (examId) => await Paper.findAll({
    where: {examId}
  })
}