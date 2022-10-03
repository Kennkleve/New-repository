//Create a jquery_lesson.js file that makes our On button add an event
//that hides all paragraphs on click and an Off button removing this event.
//$(function () {
//  $('#onButton').click(function () {
//    $('p').hide();
//  });
//
//  $('#offButton').click(function () {
//    $('p').show();
//  });
//});

//solution

$(function () {
  $('#onButton').click(function () {
    $('p').click(hide);
  });
  $('#offButton').click(function () {
    $('p').off('click', hide);
  });
  function hide() {
    $(this).hide();
  }
});
