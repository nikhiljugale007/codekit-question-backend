const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routeCourses = require("./routes/courses.js");

const port = process.env.PORT || 5000;

app.use(cors());
app.use("/api/courses", routeCourses);

app.get("/", (req, res) => {
	res.send("Hello World !!");
});

const url =
	"mongodb+srv://nikhiljugale007:PIIoZYdKF9k5PaPY@cluster0.jytgl.mongodb.net/question?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
	console.log("Connected to database")
);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

//mongodb+srv://nikhiljugale007:<password>@cluster0.jytgl.mongodb.net/<dbname>?retryWrites=true&w=majority