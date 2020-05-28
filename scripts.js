$('.txt_containers').hover(function() {
    overlay = $(this).children('.overlay');
    overlay.show('slide', {direction: 'left'});
},
  function () {
    overlay.hide();
});

$('#bio_txt span').click(function() {
    contact();
    setTimeout(reset, 5000)
});

$('nav').hover(function() {
    contact();
  },
  function() {
    reset();
  });

function contact(){
  $('nav p').html('CONTACT');
  $('#contact').show();
  $('nav p').css({'margin-right':'50px', 'margin-bottom':'50px',
   'background-color': 'black', 'color':'white', 'border':'2px solid white'});
}

function reset(){
    $('nav p').html('HILARIE SIT');
    $('#contact').fadeOut();
    $('nav p').css({'margin-right':'0px', 'margin-bottom':'0px',
    'background-color': 'white','color':'black', 'border':'2px solid black'});
}
