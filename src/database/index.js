const mongoose = require('mongoose');

require('../../.env');

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
