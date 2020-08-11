'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.schulungenGET = function schulungenGET (req, res, next) {
  Default.schulungenGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.schulungenPOST = function schulungenPOST (req, res, next, body) {
  Default.schulungenPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.schulungenSidGET = function schulungenSidGET (req, res, next, sid) {
  Default.schulungenSidGET(sid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
