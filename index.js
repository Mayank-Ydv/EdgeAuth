'use strict';

// Import the EdgeAuth class
const EdgeAuth = require('./lib/edgeAuth');

// Define your options for EdgeAuth
const options = {
    tokenName: '__token__',
    key: 'your key', // Replace with your actual key
    algorithm: 'sha256', // You can also use 'sha1' or 'md5'
    escapeEarly: true,
    fieldDelimiter: '~',
    aclDelimiter: '!',
    // verbose: true, // Set to true if you want verbose logging
    startTime: Math.floor(Date.now() / 1000), // Current UTC time in seconds
    endTime: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
    // windowSeconds: 3600, // 1 hour
};


// Instantiate the EdgeAuth class with the provided options
const edgeAuth = new EdgeAuth(options);

// Define the ACL or URL for which you want to generate a token
const acl = '/path/to/resource';
const url = 'http://example.com/path/to/resource';
// const url = 'https://ansys13.ansys.com/release1/example.txt?__token__=';

// Generate ACL token
try {
    const aclToken = edgeAuth.generateACLToken(acl);
    console.log('ACL Token:', aclToken);
} catch (error) {
    console.error('Error generating ACL token:', error.message);
}

// Generate URL token
try {
    const urlToken = edgeAuth.generateURLToken(url);
    console.log('URL Token:', urlToken);
} catch (error) {
    console.error('Error generating URL token:', error.message);
}
