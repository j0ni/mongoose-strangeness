var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExampleSchema = new Schema({
  somefield: String
});

exports = module.exports = ExampleSchema;