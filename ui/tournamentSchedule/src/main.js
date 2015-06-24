var m = require('mithril');

var ctrl = require('./ctrl');
var view = require('./view');

module.exports = function(element, opts) {

  var controller = new ctrl(opts);

  m.module(element, {
    controller: function() {
      return controller;
    },
    view: view
  });

  return {
    update: controller.update
  };
};