//Button 1 should change all paragraphs having lang attribute set to
//Bulbasaur images of size: width: 235px, height 220px.
//Button 2 should add empty button of text “empty button” after Button 1.
//Button 3 should append the current text of the first paragraph to all paragraph texts.
function button1Click() {
  $('p[lang]').html(
    '<img src="https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_960_720.png" height="220px" width="235px"/>'
  );
}

function button2Click() {
  $('<button>empty button</button>').insertAfter('button:first-Of-Type');
}
function button3Click() {
  $('p').append($('#para1').text());
}
