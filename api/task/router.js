const router = require('express').Router()
const helpers = require('./model')

router.get('/', (req, res, next) => {
    helpers.getTasks()
    .then(resp => {
        res.status(200).json(resp)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    helpers.postTask(req.body)
    .then(resp => {
        res.status(201).json(resp)
    })
    .catch(next)
})


module.exports = router