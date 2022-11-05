const db = require('../config/connection');
const { User, Employer, Jobs } = require('../models');
//const{ Employer} = require('../models/Employer')
//const {Jobs} = require('../models/Jobs')
const userSeeds = require('./userSeeds.json');
const employerSeeds = require('./employerSeeds.json');
const jobSeeds = require('./jobSeeds.json');


db.once('open', async () => {
  try {
    console.log("Seeding Data");
    await User.deleteMany({});
    await Jobs.deleteMany({});
    await Employer.deleteMany({});

    console.log("Seeding Data");
    await User.create(userSeeds);
    console.log("Seeding Data");
    await Employer.create(employerSeeds);
    //await Jobs.create(jobSeeds);
    console.log("Seeding Data");
    for (let i = 0; i < jobSeeds.length; i++) {
      const { _id, employer } = await Jobs.create(jobSeeds[i]);
      const updatedEmployer = await Employer.findOneAndUpdate(
        { employerName: employer },
        {
          $addToSet: {
            jobs: _id,
          },
        }
      );
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});