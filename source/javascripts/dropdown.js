$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) {
  e.stopPropagation();
});
// $('i.dropdown-toggle, .dropdown-menu i').on('touchstart', function(e) {
//   e.stopPropagation();
// });
