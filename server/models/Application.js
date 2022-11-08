const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const applicationSchema = new Schema({
    applicant: {    
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    employer: {    
        type: Schema.Types.ObjectId,
        ref: 'Employer',
      },
    jobId: {
        type: Schema.Types.ObjectId,
        ref: 'Jobs'
    },
    gitHub: {
        type: String,
        required: true,
    },
})

const Application = model('Application', applicationSchema);

module.exports = Application;