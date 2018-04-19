const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect("mongodb://localhost/users_test");
    mongoose.connection
      .once("open", () => { done(); })
      .on("error", error => {
        console.warn("Warning", error);
      });
});

beforeEach((done) => {
    // this will delete all users before running the test
    mongoose.connection.collections.users.drop(() => {
        // ready to run the next test
        done();
    });
});
