const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Employer = require('./Employer')

const jobsSchema = new Schema({

      title: {
        type: String,
        minlength: 10,
        required: true,
      },

      description: {
        type: String,
        minlength: 50,
        required: true,
      },
      requirements: {
        type: String,
        minlength: 30,
        required: true,
      },

      employer: {    
        type: Schema.Types.String,
        ref: 'Employer',
      },

      type: {
        type:String,
        required: true,
      }
})

const Jobs = model('Jobs', jobsSchema);

module.exports = Jobs;