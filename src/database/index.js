const mongoose = require('mongoose');

//!Variavel de ambiente
require('../../.env');

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
