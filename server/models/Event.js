const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
// date, content, user
const eventSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    studentName: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
        required: true,
    },
    dayRef: {
        type: String,
        required: false,
    },
    time: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
});

const Event = model('Event', eventSchema);
module.exports = Event;