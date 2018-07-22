const route = require('express').Router()
const subjectController = require('../../controllers/subjects')
/**
 * GET /api/subjects
 */
route.get('/', async (req, res) => {
  res.status(200).json(await subjectController.getAllSubjects())
})

/**
 * POST /api/subjects
 *    @param name
 *    @param max_marks
 */
route.post('/', async (req, res) => {
  res.status(201).json(await subjectController.addSubject(
    req.body.name,
    req.body.max_marks
  ))
})

module.exports = route