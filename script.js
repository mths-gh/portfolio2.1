$(function() {
  $('#code').click(function() {
    $('#text-code').fadeToggle();
    $('#text-edit').fadeOut();
  });

  $('#edit').click(function() {
    $('#text-edit').fadeToggle();
    $('#text-code').fadeOut();
  });
});
