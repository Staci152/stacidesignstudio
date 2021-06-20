/*
 - insert error messages and red border for inputs
 - check fields on the click and show error feedbacks (messages and border)
 */

$(document).ready(function() {
    // Button variable
    var $btn = $('#btnSubmit'),
        // Input fields variable
        $fields = $('.form-control');
    // on() method & click event
    $btn.on('click', function() {

        $fields.each(function() {
            var value = $(this).val();
            if (value == '') {
                $(this).addClass('error');
                $(this).parent().find('.validation').show(1000);
            } else {
                $(this).removeClass('error');
                $(this).parent().find('.validation').hide(1000);
            }
        });
        var errorCount = $('.error').length;
        if (errorCount == 0) {
            $btn.prop('disabled', true).text('Thank you ...');
        }
    });

});