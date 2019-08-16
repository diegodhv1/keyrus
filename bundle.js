(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function () {
  /**
   * Validate login form
   * 
   */
  function validEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  $('#btn-access').on('click', function () {
    $('#alert-success').removeClass("show");
    $('#alert-error').removeClass("show");
    var email = $('.email-input').val();
    console.log(validEmail(email));
    if ($("#form-login")[0].checkValidity() && validEmail(email) ) {
      $('#alert-success').addClass("show");
      setTimeout(function () {
        $('#alert-success').removeClass("show");
      }, 2000)
    } else {
      $('#alert-error').addClass("show");
      setTimeout(function () {
        $('#alert-error').removeClass("show");
      }, 2000)
    }
  });
});


},{}]},{},[1]);
