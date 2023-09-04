'use strict';

const assert = require('assert');
const http = require('http');

const server = require('../server');

describe('server', function () {
    before(function () {
        server.listen(8000);
    });

    const unused = 'this is an unused var';
    const anotherUnused = 'this is another unused var';
    
    it('http://localhost:8000/api/ should return 200', function (done) {
        http.get('http://localhost:8000/api/', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    after(function () {
        server.close();
    });
});
