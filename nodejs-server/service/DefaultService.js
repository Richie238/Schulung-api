'use strict';


/**
 *
 * returns List
 **/
exports.schulungenGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "datum" : "2020-08-10T00:00:00.000+0000",
  "trainer" : {
    "name" : "Ricardo Simo",
    "uri" : "https://richie238.github.io/REST-APISicherheit/"
  },
  "name" : "REST & API Sicherheit",
  "id" : 234
}, {
  "datum" : "2020-08-10T00:00:00.000+0000",
  "trainer" : {
    "name" : "Ricardo Simo",
    "uri" : "https://richie238.github.io/REST-APISicherheit/"
  },
  "name" : "REST & API Sicherheit",
  "id" : 234
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Schulung  (optional)
 * no response value expected for this operation
 **/
exports.schulungenPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * sid Integer 
 * returns Schulung
 **/
exports.schulungenSidGET = function(sid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "datum" : "2020-08-10T00:00:00.000+0000",
  "trainer" : {
    "name" : "Ricardo Simo",
    "uri" : "https://richie238.github.io/REST-APISicherheit/"
  },
  "name" : "REST & API Sicherheit",
  "id" : 234
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

