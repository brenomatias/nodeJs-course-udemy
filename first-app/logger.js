var url = 'http://mylogger.io/log';

// in this implementation we're going to send an http request
// to this endpoint, to this URL

function log(message) {
    //send an http request
    console.log(message);
    
}

// this variable
// and this log function, they're both scope
// to this module, they're private, they're not visible from the outside.

module.exports.log = log;

// I'm going to set module.
// exports.log, so I'm adding a
// method called log to this exports object.
// And simply setting it to this log function we have defined
// here. Okay? In other words, the
// object that we're exporting here, has a single method called log

module.exports.endPoint = url;

// And of course we could change the name that is exported to the outside.
// For example, internally, you may call this variable URL,
// but when we export it when we may call it
// endPoint. Okay?

// in real world applications, every module might have several
// variables and functions, we only want to export a subset of
// these members to the outside, because we want to keep this module easy to use.