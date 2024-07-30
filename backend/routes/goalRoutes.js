const express = require('express')
const router = express.Router()
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal } 
    = require('../controllers/goalController')


    router.route('/').get(getGoals).post(setGoal)
    router.route('/:id').delete(getGoals).put(updateGoal)

// router.get('/', getGoals)
// // router.get('/', (req, res) => {
// //     res.status(200).json ({message: 'Get goal'})
// // })

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

module.exports = router // Export the router object