var init = function () {
  // Accordion
  $('.accordion').accordion({
    header: "h3"
  });

  // Buttons
  $('.buttonset').buttonset();

  // Tabs
  $('.tabs').tabs();
};

$(function () {
  // Menu
  $('#menu').load('menu.html', init);

  // Content
  $('#content').load('component.html', init);

});
