jQuery(document).ready(function() {
    
    /* Superfish the menu drops ---------------------*/
    jQuery('.menu').superfish({
    	delay: 200,
    	animation: {opacity:'show', height:'show'},
    	speed: 'fast',
    	autoArrows: true,
    	dropShadows: false
    });
    
    /* Mobile Menu ---------------------*/
    jQuery('#sec-selector').change(function(){
	    if (jQuery(this).val()!='') {
	    	window.location.href=jQuery(this).val();
	    }
    });
        
    /* Flexslider ---------------------*/
    jQuery(window).load(function() { 
	    if( jQuery().flexslider) {
	    	var slider = jQuery('.flexslider');
	    	slider.fitVids().flexslider({
		    	slideshowSpeed		: slider.attr('data-speed'),
		    	animationDuration	: 600,
		    	animation			: 'slide',
		    	video				: false,
		    	useCSS				: false,
		    	prevText			: '<i class="icon-chevron-left"></i>',
		    	nextText			: '<i class="icon-chevron-right"></i>',
		    	touch				: false,
		    	animationLoop		: true,
		    	smoothHeight		: true,
		    	
		    	start: function(slider) {
		    	    slider.removeClass('loading');
		    	}
	    	});	
	    }
    });
    
    /* Masonry ---------------------*/
    jQuery(document).ready(function() { 
    	jQuery('.holder-third').masonry({
    		itemSelector : '.one-third',
    		columnWidth : 312,
    		gutterWidth : 22,
    		isAnimated: true
    	}).imagesLoaded(function() {
    	   jQuery('.holder-third').masonry('reload');
    	});
    	jQuery('.holder-half').masonry({
    		itemSelector : '.one-half',
    		columnWidth : 480,
    		gutterWidth : 20,
    		isAnimated: true
    	}).imagesLoaded(function() {
    	   jQuery('.holder-half').masonry('reload');
    	});
    });
    
    /* Image Hover Effect ---------------------*/
    jQuery(window).load(function() {                          
        jQuery('.featureimg').hover(function() {
            jQuery(this).find('.share-holder').fadeIn(200);        
        }, function() {
            jQuery(this).find('.share-holder').fadeOut(200);         
        });
    }); 
    
    /* Fit Vids ---------------------*/
    jQuery('.feature-vid').fitVids();
    
    /* jQuery UI Tabs ---------------------*/
    jQuery(function() {
       jQuery( ".organic-tabs" ).tabs();
    });
    
    /* jQuery UI Accordion ---------------------*/
    jQuery(function() {
        jQuery( ".organic-accordion" ).accordion({
        	collapsible: true, 
            autoHeight: false
        });
    });
    
    /* Close Message Box ---------------------*/
    jQuery('.organic-box a.close').click(function() {
    	jQuery(this).parent().stop().fadeOut('slow', function() {
    	});
    });
    
    /* Toggle Box ---------------------*/
    jQuery('.toggle-trigger').click(function() {
    	jQuery(this).toggleClass("active").next().fadeToggle("slow");
    });
    
    /* Pretty Photo Lightbox ---------------------*/
    jQuery("a[rel^='prettyPhoto']").prettyPhoto();
    
});