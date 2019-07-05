
(function($) {
	'use strict';
        $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
            {
            height: 12000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function() {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
            }
        });
		
		$('.navigation a').on('click', function(e) {
			e.preventDefault();
			$('.navigation').find('a').removeClass('active');
			$(this).addClass('active');
			
			var target = '.'+$(this).data('target');
			var left = $(target).position().left;
			var total = $('.content.scroll').width();
			var perc = left / (total - $(window).width()) * 100;
			
			var height = $('html').height();
			var final = ((height - $(window).height())/ 100 * perc);
			
			$('html, body').animate({scrollTop: final}, 1200);
		});
    }(jQuery));