const { Schema, model, Mongoose } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({

  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  userPassword: {
    type: String,
    required: true,
    minlength: 5,
  },
  userDescription: {
    type: String,
    required: true,
    minlength: 10,
  },
  userLocation: {
    type: String,
 
    required: true,
  }
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.userPassword = await bcrypt.hash(this.userPassword, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (userPassword) {
  return bcrypt.compare(userPassword, this.userPassword);
};

const User = model('User', userSchema);

module.exports = User;