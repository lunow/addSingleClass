# $('li').addSingleClass('active')

This very small and basic jQuery Plugin adds a class to an element and removes this class from its siblings.


## Why?

e.g.

	$('#menu a').click(function(e) {
		e.preventDefault();
		$(this).addSingleClass('active');
	});

So your clicked a element get the class active. If another sibling a had has this class it will be removed.

	<div id="menu">
		<a href="#">Home</a>
		<a href="#">About</a>
		<a href="#" class="active">Contact</a>
	</div>

Thats it!