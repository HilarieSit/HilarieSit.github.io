$('.txt_containers').hover(function() {
    overlay = $(this).children('.overlay');
    overlay.show('slide', {direction: 'left'});
  },
  function () {
    overlay.hide();
  });
