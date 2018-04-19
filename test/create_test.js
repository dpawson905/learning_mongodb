const assert = require('assert');

// give access to the user.js file
const User = require('../src/user');

describe('Creating records', () => {
    it('saves a user', (done) => {
        const joe = new User({ name: 'Joe'});
        joe.save()
            .then(() => {
                // has joe been saved successfully
                assert(!joe.isNew);
                done();
            });
    });
});
