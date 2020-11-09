$(document).ready(function () {
  (function ($) {
    "use strict";

    jQuery.validator.addMethod(
      "answercheck",
      function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
      },
      "type the correct answer -_-"
    );

    // validate contactForm form
    $(function () {
      $("#contactForm").validate({
        rules: {
          name: {
            required: true,
            minlength: 3,
          },
          subject: {
            required: true,
            minlength: 5,
          },
          number: {
            required: true,
            minlength: 10,
          },
          email: {
            required: true,
            email: true,
          },
          message: {
            required: true,
            minlength: 20,
          },
        },
        messages: {
          name: {
            required: "This field is required",
            minlength: "Your name must consist of at least 3 characters",
          },
          subject: {
            required: "This field is required",
            minlength: "Your subject must consist of at least 5 characters",
          },
          number: {
            required: "This field is required",
            minlength: "Your Number must consist of at least 10 characters",
          },
          email: {
            required: "This field is required",
          },
          message: {
            required: "This field is required",
            minlength: "Your Message must consist of atleast 20 characters",
          },
        },
        submitHandler: function (form) {
          $(form).ajaxSubmit({
            type: "POST",
            data: $(form).serialize(),
            url: "contact_process.php",
            success: function () {
              $("#contactForm :input").attr("disabled", "disabled");
              $("#contactForm").fadeTo("slow", 1, function () {
                $(this).find(":input").attr("disabled", "disabled");
                $(this).find("label").css("cursor", "default");
                $("#success").fadeIn();
                $(".modal").modal("hide");
                $("#success").modal("show");
              });
            },
            error: function () {
              $("#contactForm").fadeTo("slow", 1, function () {
                $("#error").fadeIn();
                $(".modal").modal("hide");
                $("#error").modal("show");
              });
            },
          });
        },
      });
    });
  })(jQuery);
});
