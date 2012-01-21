var init = function () {
  // Accordion
  $('.accordion').accordion({
    header: "h3"
  });

  // Buttons
  $('.buttonset').buttonset();

};

$(function () {
  // Menu
  $('#menu').load('menu.html', init);


  // Tabs
  $('.tabs').tabs();

});
