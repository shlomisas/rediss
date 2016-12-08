
/**
 * Created by Shlomi.
 */

require('babel-register');

import chai from 'chai';

let assert = chai.assert;

describe('All', () => {
    it('should be fine', () => {
        assert.equal(1, 1, 'One should be one..');
    });
});