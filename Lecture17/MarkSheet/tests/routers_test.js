process.env.TESTING = true
const {expect} = require('chai')
const request = require('request')
const {db} = require('../db/models')
const app = require('../server')

const BASE_URL = 'http://localhost:7777/api'

describe('routers', () => {
  let server;
  before((done) => {
    db.sync({force: true}).then(() => {
      server = app.listen(7777, () => {
        done()
      })
    })
      .catch(done)
  })

  after(() => {
    server.close()
  })

  describe('/api/students', () => {

    it('should create new student', (done) => {

      request.post(
        `${BASE_URL}/students`,
        {name: 'Harry Potter'},
        (err, res, body) => {
          if (err) return done(err)
          const student = JSON.parse(body)

          expect(student.id).to.equal(1)
          done()
        }
      )
    })

  })

})