var init = function () {
  // Accordion
  $('.accordion').accordion({
    header: "h3"
  });

  // Buttons
  $('.buttonset').buttonset();

  // File Input
  $('input[type=file]').customFileInput({
    button_position : 'right'
  });

  // Date Picker
  $('.datepicker').datepicker();
};

$(function () {
  // Menu
  $('#menu').load('menu.html', init);

  // Tabs
  $('.tabs').tabs({
    load: init
  });

  // Date Picker
  $('.datepicker').datepicker();

  // Button
  $('.button').button();
});
