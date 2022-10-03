//sets the background colour of all elements having any class, to green.
//changes the font size of all paragraphs inside div to 20px
//adds 10px of left padding to all paragraphs that are even children of their parent
//and have the lang attribute specified
//adds 10px of top padding to all paragraphs that are even from all children of
//their parent having the lang attribute specified.

$(function () {
  $('[class]').css('background-color', 'green');
  $('div p').css('font-size', '20px');
  $('p[lang*=en-]:even').css('padding-left', '10px');
  $('p:even[lang*=en-]').css('padding-top', '10px');
});
