const mongoose = require('mongoose');
const schema = mongoose.Schema;

const notesSchema = new schema({
    body: {
            type: String,
            },
    updated : {
        type: Date,
        default: Date.now
    }
})

module.exports = Notes = mongoose.model("mynotes", notesSchema);
