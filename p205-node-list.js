// Store NodeList in array
var hotItems = document.querySelectorAll('li.hot');
// If it contains items
if (hotItems.length > 0) {
  // Loop through each item
  for (var i = 0; i < hotItems.length; i++) {
    // Change value of class attribute
	  hotItems[i].className = 'cool';
  }
}