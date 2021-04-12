const mongoose = require("mongoose");

const CareerSchema = mongoose.Schema({
	position: { type: String, required: true },
	description: { type: String, required: true },
	company_name: { type: String, required: true },
	eligible_batches: { type: String, required: true },
	apply_link: { type: String, required: true },
});

module.exports = mongoose.model("Careers", CareerSchema);
