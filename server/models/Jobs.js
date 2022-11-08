const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./User')

const jobsSchema = new Schema({
    jobId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      location: [User],

      description: {
        type: String,
        minlength: 500,
        required: true,
      },
      
      employer: [User],

      type: {
        type:String,
        minlength: 50,
        required: true,
      }
})

const Jobs = model('Jobs', jobsSchema);

module.exports = Jobs;