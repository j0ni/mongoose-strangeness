var mongoose = require('mongoose'),
    ExampleSchema = require('./example');

describe('mongoose strangeness', function () {
  var connection;

  beforeEach(function (done) {
    connection = mongoose.createConnection(process.env.MONGO_URL || 'mongodb://127.0.0.1/example-test');
    connection.once('open', function () {
      done();
    });
  });

  afterEach(function (done) {
    connection.close(function () {
      done();
    });
  });

  it('is can run repeatedly', function (done) {
    var Example = mongoose.model('Example', ExampleSchema);
    done();
  });
});