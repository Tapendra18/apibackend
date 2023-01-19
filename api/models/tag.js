const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
}
    , {
        timestamps: true
    }
)

module.exports = mongoose.model('tag', tagSchema);