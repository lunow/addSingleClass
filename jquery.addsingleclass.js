(function($) {
	jQuery.fn.addSingleClass = function(options) {
		if(typeof options == 'string') {
			options = { activeClass: options };
		}
		var defaults = {
			activeClass: 'active'
		};
		var opts = jQuery.extend(defaults, options);		
		return this.each(function() {
			$(this).siblings().removeClass(opts.activeClass).end().addClass(opts.activeClass);
		});
	};
})(jQuery);