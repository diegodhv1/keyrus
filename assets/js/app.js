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

