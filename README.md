# $('li').addSingleClass('active')

This very small and basic jQuery Plugin adds a class to an element and removes this class from its siblings.


## Why?

e.g.

	$('#menu a').click(function(e) {
		e.preventDefault();
		$(this).addSingleClass('active');
	});

So your click an `a` element it get the class `active`. If another sibling `a` had has this class it will be removed.

	<div id="menu">
		<a href="#">Home</a>
		<a href="#">About</a>
		<a href="#" class="active">Contact</a>
	</div>


## Extended

Its also possible to perform more difficulte tasks. E.g. for manipulating the twitter bootstrap icons in your links:

	$('#menu a').click(function(e) {
		e.preventDefault();
		$(this).addSingleClass({
			activeClass: 'active',
			activate: function() {
				$(this).find('i').addClass('icon-white');
			},
			inactivate: function() {
				$(this).find('i').removeClass('icon-white');
			}
		});
	});

As you see, `this` will referer to the accordingly element.

Thats it!