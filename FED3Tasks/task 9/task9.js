//Having the same HTML file as in task 8, make the button slide up on hover.

$(function () {
  $('#button1').hover(function () {
    $(this).slideUp(2000);
  });
});
