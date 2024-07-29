const express = require('express')
const router = express.Router()
const { getGoals } = require('../controllers/goalController')


router.get('/', getGoals)
// router.get('/', (req, res) => {
//     res.status(200).json ({message: 'Get goal'})
// })

router.post('/', (req, res) => {
    res.statis(200).json ({message: 'Set goal'})
})

router.put('/:id', (req, res) => {
    res.status(200).json ({message: `Update goal ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json ({message: `Delete goal ${req.params.id}`})
})

module.exports = router // Export the router object