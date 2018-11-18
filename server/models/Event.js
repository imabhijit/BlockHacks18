const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    organizer:String,
    location: String,
    startTime: String,
    endTime: String,
    Description: String
});

module.exports = mongoose.model('event', eventSchema, 'events');