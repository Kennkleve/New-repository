//Create a jquery_lesson.js file which hides all paragraphs on their click.
$(function () {
  var elem = $('#para3');
  $('.classA:first-child').click(function () {
    $('.classA:first-child').hide();
  });
  elem.prev().click(function () {
    elem.prev().hide();
  });

  $('#para3').click(function () {
    $('#para3').hide();
  });
  $('#para4').click(function () {
    $('#para4').hide();
  });
  $('#para5').click(function () {
    $('#para5').hide();
  });
});

//disappointing solution

//$(function () {
//  $('p').click(function () {
//    $('p').hide();
//  });
//});
