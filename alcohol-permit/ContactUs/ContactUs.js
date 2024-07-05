


// ================email up on signup near footer============
$(document).ready(function () {
    $(".msg-info input").on("focus", function () {
        $(this).siblings("label").find("span").addClass("move-up");
    });
  
    $(".msg-info input").on("blur", function () {
        if (!$(this).val()) {
            $(this).siblings("label").find("span").removeClass("move-up");
        }
    });
  
    $(".msg-info label span").on("click", function () {
        $(this).closest(".msg-info").find("input").focus();
    });
  });