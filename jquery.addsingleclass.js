(function($) {
	jQuery.fn.addSingleClass = function(options) {
		if(typeof options == 'string') {
			options = { activeClass: options };
		}
		var defaults = {
			activeClass: 'active',
			inactivate: false,
			activate: false
		};
		var opts = jQuery.extend(defaults, options);		
		return this.each(function() {
			var $activate, $inactive;
			$inactivate = $(this).siblings().removeClass(opts.activeClass);
			$activate = $(this).addClass(opts.activeClass);
			if(typeof opts.inactivate == 'function') {
				$inactivate.each(function() {
					opts.inactivate.apply(this);
				});
			}
			if(typeof opts.activate == 'function') {
				$activate.each(function() {
					opts.activate.apply(this);
				});
			}
		});
	};
})(jQuery);