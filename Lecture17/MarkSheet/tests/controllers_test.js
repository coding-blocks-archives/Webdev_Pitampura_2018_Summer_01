process.env.TESTING = true
const {expect} = require('chai')
const {db} = require('../db/models')
const studentController = require('../controllers/students')

describe('controllers', () => {

  before((done) => {
    db.sync().then(() => done()).catch(err => done(err))
  })

  describe('students', () => {
    it('should add a student', (done) => {
      studentController.createStudent('John Doe')
        .then(student => {
          expect(student.name).to.equal('John Doe')
          expect(student.id).to.equal(1)
          done()
        })
        .catch(done)
    })

    it('should fetch all students', (done) => {
      studentController.getAllStudents()
        .then(students => {
          expect(students).to.have.lengthOf(1)
          expect(students[0].name).to.equal('John Doe')
          done()
        })
        .catch(done)
    })
  })

})