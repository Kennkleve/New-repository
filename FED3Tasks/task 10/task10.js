//Having the same HTML file as in task 8, make the button on click change its width to 200px in 5 seconds.

$(function () {
  $('#button1').click(function () {
    $(this).animate({ width: '200px' }, 5000);
  });
});
