const express = require("express");
const router = express.Router();

const Career = require("../models/Career");

router.get("/", async (req, res) => {
	try {
		const career = await Career.find();
		res.status(200).json(career);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

router.post("/", async (req, res) => {
	const temp_career = new Career({
		position: req.body.position,
		description: req.body.description,
		company_name: req.body.company_name,
		eligible_batches: req.body.eligible_batches,
		apply_link: req.body.apply_link,
	});

	try {
		const save_career = await temp_career.save();
		res.status(200).json({
			message: "Career saved successfully",
			career: save_career,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;

// {
// 	"position":"Problem Setter",
// 	"description":"Opening for a person who can add problems to codeKIT website. Requirements are experience in programming. Knowledge of react is plus.",
// 	"company_name": "codeKIT",
// 	"eligible_batches": "2023,2024",
// 	"apply_link": "mail us your resume at nikhiljugale007@gmail.com"
// }
