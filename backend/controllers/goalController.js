const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

//@desc Get all goals
//@route GET /api/goals
//@access Private 
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});

//@desc Set goal
//@route POST /api/goals
//@access Private 
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {  // Ensure the correct field is checked
        res.status(400);
        throw new Error("Please enter a goal");
    }
    const goal = await Goal.create({
        text: req.body.text
    });

    res.status(201).json(goal); // Change response code to 201 for creation
});

//@desc Update goal
//@route PATCH /api/goals/:id
//@access Private 
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id); // Correct method and await

    if (!goal) {
        res.status(404); // Change status code to 404 for not found
        throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedGoal);
});

//@desc Delete goal
//@route DELETE /api/goals/:id
//@access Private 
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(404); // Handle case when goal is not found
        throw new Error('Goal not found');
    }

    await goal.remove()

    res.status(200).json({ message: `Deleted goal ${req.params.id}`});
});

module.exports = { 
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal, 
}; 