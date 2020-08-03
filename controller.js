'use strict';

const jsonUtils = require('./jsonUtils');
const ServiceClass = require('./service');

class ControllerClass {
    constructor() {
    }

    getServices(req, res) {
        req.header('Access-Control-Allow-Origin', '*');
        const services = new ServiceClass().getServices(req.params.environment);
        res.send(jsonUtils.prettyStringify(services));
    }
}

module.exports = ControllerClass;
