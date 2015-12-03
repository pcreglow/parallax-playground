console.log('\'Allo \'Allo!');

$(function() {

	function enableSkrollr(){
		console.log('we are on desktop');

		// Enable Skroll only for non-touch devices
		if(!Modernizr.touch){
			var s = skrollr.init({
	            forceHeight: false
	        });
        }

	}

	function disableSkrollr(){
		console.log('we are on mobile');

		// Destroy Skrollr
		var s = skrollr.init();
		s.destroy();
	}

	enquire.register("screen and (min-width: 768px)", {
	    match : function() {
	        enableSkrollr();
	    },
	    unmatch : function() {
	        disableSkrollr();
	    }
	});

});
