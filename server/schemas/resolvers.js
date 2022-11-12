const { AuthenticationError } = require('apollo-server-express');
const { User, Employer } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userName }) => {
      return User.findOne({ userName });
    },
    employers: async () => {
      return Employer.find();
    },
    employer: async (parent, { employerName }) => {
      return Employer.findOne({ employerName });
    },
    meUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._userId });
      }
      throw new AuthenticationError('You need to be logged in as user!');
    },
    meEmployer: async (parent, args, context) => {
      if (context.employer) {
        return Employer.findOne({ _id: context.employer._employerId });
      }
      throw new AuthenticationError('You need to be logged in employer!');
    },
  },

  Mutation: {
    addUser: async (parent, { userName, userEmail, userPassword }) => {
      const user = await User.create({ userName, userEmail, userPassword });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { userEmail, userPassword }) => {
      const user = await User.findOne({ userEmail });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(userPassword);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },

  // Query: {
   
  //   me: async (parent, args, context) => {
  //     if (context.employer) {
  //       return Employer.findOne({ _id: context.employer._employerId });
  //     }
  //     throw new AuthenticationError('You need to be logged in!');
  //   },
  // },

//   Mutation: {
//     addEmployer: async (parent, { employerName, employerEmail, employerPassword }) => {
//       const employer = await employer.create({ employerName, employerEmail, employerPassword });
//       const token = signToken(employer);
//       return { token, employer };
//     },
//     login: async (parent, { employerEmail, employerPassword }) => {
//       const employer = await Employer.findOne({ employerEmail });

//       if (!employer) {
//         throw new AuthenticationError('No user found with this email address');
//       }

//       const correctPw = await employer.isCorrectPassword(employerPassword);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(employer);

//       return { token, employer };
//     },
//   },
 };

module.exports = resolvers;