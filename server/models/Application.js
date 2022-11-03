const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./User');
const Jobs = require('./Jobs');

const applicationSchema = new Schema({
    applicant: [User],
    employer: [User],
    location: [User],
    jobId: [Jobs],
    gitHub: {
        type: String,
        required: true,
    },

})

const Application = model('Application', applicationSchema);

module.exports = Application;