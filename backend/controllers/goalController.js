const asyncHandler = require('express-async-handler');


const Goal = require('../models/goalModel')
//@desc Get all goals
//@route GET /api/goals
//@access Private 
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals);
});

//@desc Set goal
//@route POST /api/goals
//@access Private 
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.goal) {
        res.status(400);
        throw new Error("Please enter a goal");
    }

    res.status(200).json({ message: 'Set goal' });
});

//@desc Update goals
//@route PATCH /api/goals/:id
//@access Private 
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//@desc Delete goal
//@route DELETE /api/goals/:id
//@access Private 
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { 
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal 
};