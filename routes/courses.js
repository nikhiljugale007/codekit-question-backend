const { Router } = require("express");
const express = require("express");

const router = express.Router();

const Course = require("../models/Course");

// router.get("/", (req, res) => {
// 	res.send("Course routes");
// });

// router.get("/", (req, res) => {
// 	Course.find()
// 		.exec()
// 		.then((result) => {
// 			res.status(200).json(result);
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ messsage: err });
// 		});
// });

router.get("/", async (req, res) => {
	try {
		const courses = await Course.find();
		res.status(200).json(courses);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

// router.get("/:courseId", (req, res) => {
// 	const id = req.params.courseId;
// 	Course.findById(id)
// 		.exec()
// 		.then((result) => {
// 			if (result) {
// 				res.status(200).json(result);
// 			} else {
// 				res.status(404).json({ messsage: "No entry found" });
// 			}
// 		})
// 		.catch((err) => {
// 			res.status(501).send({ messsage: err });
// 		});
// });

router.get("/:courseId", async (req, res) => {
	try {
		const id = req.params.courseId;
		const course = await Course.findById(id);
		if (course) {
			res.status(200).json(course);
		} else {
			res.status(404).json({ messsage: "No entry found" });
		}
	} catch {
		res.status(500).json({ message: err });
	}
});

// router.get("/1", (req, res) => {
// 	res.send("Course 1");
// });

// router.post("/", (req, res) => {
// 	const myCourse = new Course({
// 		course: req.body.course,
// 		tag: req.body.tag,
// 	});

// 	myCourse
// 		.save()
// 		.then((result) => {
// 			res.status(201).json({
// 				message: "Course saved: success",
// 				result,
// 			});
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ message: err });
// 		});
// });

router.post("/", async (req, res) => {
	const myCourse = new Course({
		course: req.body.course,
		tag: req.body.tag,
	});
	try {
		const savedCourse = await myCourse.save();
		res.status(201).json({
			message: "Course saved",
			createdCourse: savedCourse,
		});
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

router.patch("/:courseId", async (req, res) => {
	try {
		const id = req.params.courseId;
		const course = await Course.updateOne(
			{
				_id: id,
			},
			{
				$set: { course: req.body.course, tag: req.body.tag },
			}
		);
		res.status(200).json(course);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

router.delete("/:courseId", async (req, res) => {
	try {
		const id = req.params.courseId;
		const course = await Course.remove({ _id: id });
		res.status(200).json(course);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

module.exports = router;
