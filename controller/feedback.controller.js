const pool = require("../db");

class FeedbackController {
    async createFeedback(req, res) {
        try {
            const { name, email, message } = req.body;
            const newFeeback = await pool.query(
                "INSERT INTO feedbacks (name, email, message) values($1, $2, $3) RETURNING *",
                [name, email, message],
            );

            res.json(newFeeback.rows[0]);
        } catch (error) {
            console.error(error.message);
        }
    }
    async getAllFeedbacks(req, res) {
        try {
            const allFeedbacks = await pool.query("SELECT * FROM feedbacks");
            res.json(allFeedbacks.rows);
        } catch (error) {
            console.error(error.message);
        }
    }
}

module.exports = new FeedbackController();
