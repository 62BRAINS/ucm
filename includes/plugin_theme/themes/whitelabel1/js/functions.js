$(document).ready(function () {


	/*----------------------------------------------------------------------*/
	/* Parse the data from an data-attribute of DOM Elements
	/*----------------------------------------------------------------------*/


	$.parseData = function (data, returnArray) {
		if (/^\[(.*)\]$/.test(data)) { //array
			data = data.substr(1, data.length - 2).split(',');
		}
		if (returnArray && !$.isArray(data) && data != null) {
			data = Array(data);
		}
		return data;
	};
	
	/*----------------------------------------------------------------------*/
	/* Image Preloader
	/* http://engineeredweb.com/blog/09/12/preloading-images-jquery-and-javascript
	/*----------------------------------------------------------------------*/
	


	// Arguments are image paths relative to the current page.
	$.preload = function() {
		var cache = [],
			args_len = arguments.length;
		for (var i = args_len; i--;) {
			var cacheImage = document.createElement('img');
			cacheImage.src = arguments[i];
			cache.push(cacheImage);
		}
	};
	
	
	/*----------------------------------------------------------------------*/
	/* fadeInSlide by revaxarts.com
	/* Fades out a box and slide it up before it will get removed
	/*----------------------------------------------------------------------*/


	$.fn.fadeInSlide = function (speed, callback) {
		if ($.isFunction(speed)) callback = speed;
		if (!speed) speed = 200;
		if (!callback) callback = function () {};
		this.each(function () {

			var $this = $(this);
			$this.fadeTo(speed / 2, 1).slideDown(speed / 2, function () {
				callback();
			});
		});
		return this;
	};
	
	
	/*----------------------------------------------------------------------*/
	/* fadeOutSlide by revaxarts.com
	/* Fades out a box and slide it up before it will get removed
	/*----------------------------------------------------------------------*/


	$.fn.fadeOutSlide = function (speed, callback) {
		if ($.isFunction(speed)) callback = speed;
		if (!speed) speed = 200;
		if (!callback) callback = function () {};
		this.each(function () {

			var $this = $(this);
			$this.fadeTo(speed / 2, 0).slideUp(speed / 2, function () {
				$this.remove();
				callback();
			});
		});
		return this;
	};
	
	/*----------------------------------------------------------------------*/
	/* textFadeOut by revaxarts.com
	/* Fades out a box and slide it up before it will get removed
	/*----------------------------------------------------------------------*/


	$.fn.textFadeOut = function (text, delay, callback) {
		if (!text) return false;
		if ($.isFunction(delay)) callback = delay;
		if (!delay) delay = 2000;
		if (!callback) callback = function () {};
		this.each(function () {

			var $this = $(this);
			$this.stop().text(text).show().delay(delay).fadeOut(1000,function(){
				$this.text('').show();
				callback();
			})
		});
		return this;
	};
	
	/*----------------------------------------------------------------------*/
	/* leadingZero by revaxarts.com
	/* adds a leding zero if necessary
	/*----------------------------------------------------------------------*/
	
	
	$.leadingZero = function (value) {
		value = parseInt(value, 10);
		if(!isNaN(value)) {
			(value < 10) ? value = '0' + value : value;
		}
		return value;
	};


    /** appended stuff from script.js etc.. here by dtbaker */
    //Header navigation for smaller screens
    var $headernav = $('ul.headernav');

    $headernav.bind('click',function(){
        //if(window.innerWidth > 800) return false;
        var ul = $headernav.find('ul').eq(0);
        (ul.is(':hidden')) ? ul.addClass('shown') : ul.removeClass('shown');
    });

    $headernav.find('ul > li').bind('click',function(event){
        event.stopPropagation();
        var children = $(this).children('ul');

        if(children.length){
            (children.is(':hidden')) ? children.addClass('shown') : children.removeClass('shown');
            return false;
        }
    });

    /*----------------------------------------------------------------------*/
    /* Widgets
    /*----------------------------------------------------------------------*/

    $('div.widgets').each(function(){$(this).wl_Widget()});
/*----------------------------------------------------------------------*/
    /* Tabs
    /*----------------------------------------------------------------------*/

    $('div.tab').each(function(){$(this).tabs({
            fx: {
                opacity: 'toggle',
                duration: 'fast'
            }
    });});


    /* fix the quick pin if it's availale */
    $('#top_menu_pin > a').each(function(){
        $(this).html('<span>'+$(this).html()+'</span>');
        $(this).click(function(){return false;});
    });


});
