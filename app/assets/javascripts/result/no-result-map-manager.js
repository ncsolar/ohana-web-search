// Manages page appearance when Google Maps can't be loaded.
define([
  'app/alert-manager'
],
function (alert) {
  'use strict';

  function init() {
    console.log('Map failed to load! Hiding map HTML code.');

    document.getElementById('map-view').className = 'hide';
    document.getElementById('map-size-control').className = 'hide';

    var message = 'Oops! Map failed to load. Try reloading the page or ' +
                  '<a href="/about/#feedback-box">send us a message</a>.';
    alert.show(message);
  }

  return {
    init:init
  };
});
