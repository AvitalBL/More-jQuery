// $('span').data().id;

// PARTNER EXERCISE 1

// var sauce = $('p:contains("Brisket")').data().sauce;
// alert(sauce);

//PARTNER EXERCISE 3 
$(document).ready(function() {
    $('li').click(function(){
        $(this).remove();
    });
});

$('button').click(function () {
    var name = $('#my-input').val();
    $('ul').append('<li>' + name + '</li>');
    bindEvents();
  });
  
  var bindEvents = function () {
    $('li').click(function () {
      $(this).remove();
    });
  }
