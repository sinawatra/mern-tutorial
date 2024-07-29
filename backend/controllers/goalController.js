const getGoals = (req, res) => {
    res.status(200).json ({message: `Update goal ${req.params.id}`})
}

module.exports = { getGoals } // Export the getGoals function