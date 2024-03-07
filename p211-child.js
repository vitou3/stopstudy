// Select the starting point and find its children.
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstElementChild;
var lastItem = startItem.lastElementChild;

// Change the values of the children's
// class attributes.
firstItem.className = 'complete';
lastItem.className = 'cool';