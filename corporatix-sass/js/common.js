$(function() {
  var pull = $('.hidden-button');
      menu = $('nav ul');
      menuHeight = menu.height();
  $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
  });

});