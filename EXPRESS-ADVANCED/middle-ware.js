function Logger (req, res, next) {
    console.log('Logging...');
    next();
}

module.exports = Logger;

// Express. js basically helps you manage everything, from routes, to handling requests and views. Redis is a key/value store -- commonly used for sessions and caching in Node. js applications.Jul
