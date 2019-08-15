var $ = require("jquery");
require('bootstrap');

$(document).ready(function(){

    /**
     * Validate login form
     * 
     */
    $('#btn-access').on('click', function() {
        $('#alert-success').removeClass("show");
        $('#alert-error').removeClass("show");
        if ($("#form-login")[0].checkValidity()) {
            $('#alert-success').addClass("show");
            setTimeout(function(){
                $('#alert-success').removeClass("show");
            }, 4000)
        } else {
            $('#alert-error').addClass("show");
            setTimeout(function(){
                $('#alert-error').removeClass("show");
            }, 4000)
        }
    });
}); 

