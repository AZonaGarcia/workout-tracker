var mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout-trainer',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );