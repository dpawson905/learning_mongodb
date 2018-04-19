const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
    .once('open', ()=> console.log('Good to go!'))
    .on('error', (error) => {
        console.warn('Warning', error)
    });

beforeEach((done) => {
    // this will delete all users before running the test
    mongoose.connection.collections.users.drop(() => {
        // ready to run the next test
        done();
    });
});
