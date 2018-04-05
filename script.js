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

// Click X to delete todo
$('ul').on('click', 'span', function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();
});

$('input[type='text']').on('keypress', function(e) {
  // Upon hitting enter...
  if (e.which === 13) {
    // Grabs new to-do list item from input
    let itemText = $(this).val();
    // Clears input box
    $(this).val('');
    // Creates new li and adds to ul
    $('ul').append('<li><span><i class='fa fa-trash'></i></span> ' + itemText + '</li>');
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
  $('input[type="text"]').fadeToggle();
});
