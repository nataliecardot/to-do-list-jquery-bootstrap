$(function() {

  let degree = 45;

  init();

  function init() {
    // Sets CSS transform properties
    $('.fa-plus').css({
      '-webkit-transform': 'rotate(' + degree + 'deg)',
      '-moz-transform': 'rotate(' + degree + 'deg)',
      '-ms-transform': 'rotate(' + degree + 'deg)',
      '-o-transform': 'rotate(' + degree + 'deg)',
      'transform': 'rotate(' + degree + 'deg)',
      'transition': '0.2s linear'
    });
    degree += 45;
  }

  // Checks off specific items upon click and creates class 'completed'
  $('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
  });

  // Click to delete
  $('ul').on('click', 'span', function(e) {
    // fadeOut() hides element by setting to transparent
    $(this).parent().fadeOut(500, function() {
      // Removes element along with its data and events
      $(this).remove();
    });
    // Prevents event from bubbling up DOM tree,notifying any parent handlers of the event
    e.stopPropagation();
  });

  $('input[type="text"]').on('keypress', function(e) {
    // If user hits enter...
    if (e.which === 13) {
      // Grabs new to-do list item from input
      let itemText = $(this).val();
      // Clears input box
      $(this).val('');
      // Creates new li from input and adds to ul
      $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + itemText + '</li>');
    }
  });

  // Rotates '+' and drops down or recloses input box on click
  $('.fa-plus').on('click', function() {
    if (degree === 135) {
      degree = 45;
    }
    // Sets CSS transform properties. Selector 'this' refers to '+' (with class '.fa-plus') being clicked
    $(this).css({
      '-webkit-transform': 'rotate(' + degree + 'deg)',
      '-moz-transform': 'rotate(' + degree + 'deg)',
      '-ms-transform': 'rotate(' + degree + 'deg)',
      '-o-transform': 'rotate(' + degree + 'deg)',
      'transform': 'rotate(' + degree + 'deg)',
      'transition': '0.2s linear'
    });
    degree += 45;
    // Animates opacity of text box, setting its display style property to none once its opacity reaches 0
    $('input[type="text"]').fadeToggle();
  });

});
