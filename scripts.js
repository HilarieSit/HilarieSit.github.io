// change active label
$(document).ready(function() {
  $('nav li').on('click', function(e){
    e.preventDefault();
    var active_class = $(this).parent().find('li.active');
    var active_attr = $(active_class).html();
    $(active_class).removeClass('active');

    // sort based on selected label
    var attribute = $(this).text();

    if (attribute == active_attr){
        // if clicked on active label, show all projects
      $('#bigabout').hide();
      $('.proj_containers').show();
      $('.proj_containers:nth-child(even) .txt_containers').css('background-color', '#eee');
      $('.proj_containers:nth-child(odd) .txt_containers').css('background-color', '#d2dfe7');
    } else {
      $(this).addClass('active');
      if (attribute == "About"){
        // if clicked on "About"
        $('.proj_containers').hide();
        $('#bigabout').show();
      } else {
        var i = 0;
        $('.proj_containers').each(function() {
          var classtype = $(this).data('classtype');
          if (classtype.includes(attribute)){
            $(this).show();
            if ((i % 2) == 1){
              $(this).find('.txt_containers').css('background-color', '#eee');
            } else {
              $(this).find('.txt_containers').css('background-color', '#d2dfe7');
            }
            i++;
          }
          else {
            $(this).hide();
          }
        });
        $('#bigabout').hide();
      }
    }

    AOS.init({
      offset: 0,
      duration: 750,
      mirror: false
    });
    lines();
  });

  $('.txt_containers').hover(function() {
      overlay = $(this).children('.overlay');
      overlay.show('slide', {direction: 'left'});
  },
    function () {
      overlay.hide();
  });

  // block scrolling animation
  AOS.init({
    offset: 0,
    duration: 750,
    mirror: false
  })

  // phone dropdown menu
  var i2 = 0
  $('#menu').on('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    if (i2 == 0){
      cross();
      i2 = 1;
    }
    else{
      lines();
      i2 = 0;
    }
  });

  $(window).resize(function() {
    if($(window).width() >= 700) {
        // if larger or equal
        $('nav ul').show();
        $('h1').show()
    } else {
        // if smaller
        $('nav ul').hide();
    }
}).resize(); // This will simulate a resize to trigger the initial run.

});

function cross(){
  if ($(window).width() < 700) {
    $('h1').hide();
    $('nav ul').stop(true,true).slideDown('slow');
    $('.bar1').css('transform', 'rotate(-45deg) translate(-9px, 6px)');
    $('.bar2').css('opacity', '0');
    $('.bar3').css('transform', 'rotate(45deg) translate(-8px, -8px)');
  }
}; 

function lines(){
  if ($(window).width() < 700) {
    $('h1').show();
    $('nav ul').stop(true,true).slideUp();
    $('.bar1').css('transform', 'none');
    $('.bar2').css('opacity', '1');
    $('.bar3').css('transform', 'none');
  }
}; 
