const mongoose = require('mongoose');

const addSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    ,
	// desc: String,
	img:
	{
		data: Buffer,
		contentType: String
	}
    , status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('add', addSchema);
