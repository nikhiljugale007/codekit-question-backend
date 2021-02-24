const express = require("express");

const router = express.Router();

const Question = require("../models/Question");

router.get("/", async (req, res) => {
	try {
		const questions = await Question.find();
		res.status(200).json(questions);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

router.get("/:questionId", async (req, res) => {
	try {
		const id = req.params.questionId;
		const question = await Question.findById(id);
		if (question) {
			res.status(200).json(question);
		} else {
			res.status(404).json({ message: "No entry found" });
		}
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

router.post("/", async (req, res) => {
	const temp_question = new Question({
		question_name: req.body.question_name,
		description: req.body.description,
		input: req.body.input,
		output: req.body.output,
		constraints: req.body.constraints,
		sample_input: req.body.sample_input,
		sample_output: req.body.sample_output,
		difficulty: req.body.difficulty,
		submissions: req.body.submissions,
	});

	try {
		const saveQuestion = await temp_question.save();
		res.status(201).json({
			message: "Question added successfully",
			question: saveQuestion,
		});
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

module.exports = router;
