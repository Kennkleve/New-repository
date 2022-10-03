//Make the button slowly fade to 0.4 on double click.

$(function () {
  $('#button1').dblclick(function () {
    $(this).fadeTo('slow', 0.4);
  });
});
