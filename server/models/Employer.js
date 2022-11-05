const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const employerSchema = new Schema({

    employerName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    employerEmail: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
    employerPassword: {
        type: String,
        required: true,
        minlength: 5,
      },
      employerDescription: {
        type: String,
        required: true,
        minlength: 10,
      },
      employerLocation: {
        type: String,
        required: true,
      },
      jobs: [
        {
          type: Schema.Types.String,
          ref: 'Jobs',
        },
      ]
});

employerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.employerPassword = await bcrypt.hash(this.employerPassword, saltRounds);
    }
  
    next();
  });
employerSchema.methods.isCorrectPassword = async function (employerPassword) {
    return bcrypt.compare(employerPassword, this.employerPassword);
  };

const Employer = model('Employer', employerSchema);

module.exports = Employer;