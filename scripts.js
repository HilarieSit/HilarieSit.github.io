$(document).ready(function() {
  // track menu clicks
  var i2 = 0
  // change active label
  $('nav li').on('click', function(e){
    e.preventDefault();
    var active_class = $(this).parent().find('li.active');
    var active_attr = $(active_class).html();
    $(active_class).removeClass('active');

    // sort based on selected label
    var attribute = $(this).text();

    if (attribute == active_attr){
      // if clicked on current active label, show all projects
      $('#bigabout').hide();
      $('.proj_containers').show();
      $('.proj_containers:nth-child(even) .txt_containers').css('background-color', '#eee');
      $('.proj_containers:nth-child(odd) .txt_containers').css('background-color', '#d2dfe7');
    } else {
      $(this).addClass('active');
      if (attribute == "About"){
        // if clicked on "About", show about divs
        $('.proj_containers').hide();
        $('#bigabout').show();
      } else {
        // if clicked on topic, show correct project divs
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
    i2 = 0;
  });

  // add overlay to project containers on hover
  $('.txt_containers').hover(function() {
      overlay = $(this).children('.overlay');
      overlay.show('slide', {direction: 'left'});
  },
    function () {
      overlay.hide();
  });

  // scrolling animation
  AOS.init({
    offset: 0,
    duration: 750,
    mirror: false
  })

  // phone dropdown menu
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

  // fix styling issues on resize
  w = $(window).width();
  $(window).resize(function() {
    nw = $(window).width();
    if($(window).width() >= 700) {
        $('nav').css('opacity', '1');
        $('nav ul').show();
        $('h1').show();
        $('.proj_containers').css('display', 'flex');
    } else {
        $('nav ul').hide();
        if (w == nw){
          $('.proj_containers').css('display', 'inline-block');
        }
    }
  }).resize(); 

  // fade out nav on scroll down
  var lastScrollTop = 0;
  $(window).on('scroll', function(){
    var st = $(window).scrollTop();
    if ($(window).width() < 700) {
      if (st <= 50){
        $('nav').css('opacity', '1');
      } else {
        if (st > lastScrollTop){
            $('nav').stop().fadeTo(100, 0);
        } 
        else {
            $('nav').css('opacity', '1');
        }
      }
    }
    lastScrollTop = st;
  });
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
