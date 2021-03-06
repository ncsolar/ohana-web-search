// Manages behavior of feedback form.
define([
  'app/alert-manager',
  'util/util',
  'jquery'
],
function (alert, util, $) {
  'use strict';

  var _sendBtn;

  var _commentInput;
  var _emailInput;

  function init()
  {
    _sendBtn = document.getElementById('feedback-form-btn');
    _sendBtn.addEventListener('click', _sendBtnClicked, false);

    _commentInput = document.querySelector('#feedback-box #comment');
    _emailInput = document.querySelector('#feedback-box #email');

    if (util.isEventSupported('input')) {
      _commentInput.addEventListener('input', _onFeedbackFormInput);
      _emailInput.addEventListener('input', _onFeedbackFormInput);
    } else {
      _sendBtn.disabled = '';
    }
  }

  function _sendBtnClicked(evt) {
    // Stop the form from submitting.
    evt.preventDefault();
    var emailCheck = new RegExp('.+@.+\..+','i'); // jshint ignore:line
    var match = emailCheck.exec(_emailInput.value);
    if (match || _emailInput.value === '')
      _feedbackFormSend();
    else
      _incorrectEmailAddress();
  }

  function _onFeedbackFormInput() {
    _updateFeedbackForm();
  }

  function _isFeedbackFormMessagePresent() {
    var message = _commentInput.value;
    message = message.trim();

    if (util.isEventSupported('input')) {
      return message.length > 0;
    } else {
      return true;
    }
  }

  function _updateFeedbackForm() {
    if (_isFeedbackFormMessagePresent()) {
      _sendBtn.disabled = false;
    } else {
      _sendBtn.disabled = true;
    }
  }

  function _feedbackFormSend()
  {
    var agent = '\nUser agent: ' + navigator.userAgent;

    var csrfToken = $('meta[name="csrf-token"]').attr('content');

    var transmission = {
      message: _commentInput.value,
      from: _emailInput.value,
      agent: agent
    };

    $.ajax({
        headers: {
          'X-CSRF-Token': csrfToken
        },
        url             : '/feedback',
        type            : 'POST',
        dataType        : 'json',
        data            : JSON.stringify(transmission),
        contentType     : 'application/json',
        success         : _onSuccess,
        error           : _onError
      });
  }

  // on submitting success, clear out values and post success message.
  function _onSuccess() {
    alert.show('Feedback Sent! Thank you!', alert.type.VALID);
    _commentInput.value = '';
    _updateFeedbackForm();
  }

  // on submitting error, clear out values and post failure message.
  function _onError() {
    var message = 'Error sending feedback, please ' +
                  '<a href="/">reload</a> and try again!';
    alert.show(message, alert.type.ERROR);
    _commentInput.value = '';
    _emailInput.value = '';
    _updateFeedbackForm();
  }

  // incorrect email address. Show error message.
  function _incorrectEmailAddress() {
    var message = 'Your email address appears to be formatted ' +
                  'incorrectly, please try again!';
    alert.show(message, alert.type.ERROR);
    _emailInput.value = '';
  }

  return {
    init:init
  };
});
