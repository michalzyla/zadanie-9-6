var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
	var element = document.createElement('li');
	var items = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + items.length;
	list.appendChild(element);
});