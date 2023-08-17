// client-side js
// run by the browser each time your view template is loaded

$(function() {
  $.get('/users', function(users) {
    users.forEach(function(user) {
      $('<h3 style="display:block;border-radius:4px;cursor:pointer;background-color:#0000001e;width:90%;color:black; margin-top:-10px;height:auto;"></h3>').text(user[0] + " " + user[1]).appendTo('div#users');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var fName = $('input#fName').val();
    var lName = $('input#fUrl').val();
    $.post('/users?' + $.param({fName:fName, lName:lName}), function() {
      $('<h3 style="display:block;border-radius:4px;cursor:pointer;background-color:#0000001e;width:90%;color:black; margin-top:-10px;height:auto;"></h3>').text(fName).appendTo('div#users');
      $('input#fName').val('');
      $('input#FUrl').val('');
      $('input').focus();
    });
  });
});