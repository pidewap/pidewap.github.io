/**
 * Copyright (c) 2016 Gian MR
 * Gian MR Theme Custom Javascript
 *
 * @package Muvipro
 */

(function(sidr) {
	"use strict"

	sidr.new('#gmr-topnavresponsive-menu', {
		name: 'menus',
		source: '.gmr-logomobile, .close-topnavmenu-wrap, .gmr-mainmenu, .gmr-secondmenu, .gmr-topnavmenu',
		displace: false,
		onOpen   : function( name ) {
			// Re-name font Icons to correct classnames and support menu icon plugins.
			var elems = document.querySelectorAll( "#menus [class*='sidr-class-icon_'], #menus [class*='sidr-class-_mi']" ), i;
			for ( i = 0; i < elems.length; i++ ) {
				var elm = elems[i];
				if ( elm.className ) {
					elm.className = elm.className.replace(/sidr-class-/g,'');
				}
			}
		}
	});

	window.onresize = function() {
		sidr.close('menus');
	};

	document.querySelector( '#sidr-id-close-topnavmenu-button' ).addEventListener(
		'click',
		function( e ) {
			e.preventDefault();
			sidr.close('menus');
		}
	);
	
	/* $( '.sidr-inner li' ).each( */
	var elmTag = document.querySelectorAll( '.sidr-inner li' ), i;
	
	for ( i = 0; i < elmTag.length; i++ ) {
		if ( elmTag[i].querySelectorAll( 'ul' ).length > 0 ) {
			var elm = elmTag[i].querySelectorAll( 'a' );
			if ( elm !== null ) {
				elm[0].innerHTML += '<span class="sub-toggle"><span class="arrow_carrot-down"></span></span>';
			}
		}
	}
	
	/* $( '.sidr-inner .sub-toggle' ).click( */
	var elmTag = document.querySelectorAll( '.sidr-inner .sub-toggle' ), i;
	
	for ( i = 0; i < elmTag.length; i++ ) {
		elmTag[i].addEventListener(
			'click',
			function( e ) {
				e.preventDefault();
				var t = this;
				t.classList.toggle( 'is-open' );
				if ( t.classList.contains( 'is-open' ) ) {
					var txt = '<span class="arrow_carrot-up"></span>';
				} else {
					var txt = '<span class="arrow_carrot-down"></span>';
				}
				t.innerHTML = txt;
				/* console.log (t.parentNode.parentNode.querySelectorAll( 'a' )[0].nextElementSibling); */
				var container = t.parentNode.parentNode.querySelectorAll( 'a' )[0].nextElementSibling;
				if ( !container.classList.contains( 'active' ) ) {
					container.classList.add('active');
				} else {
					container.classList.remove('active');
				}
			}
		);
	}

})( window.sidr );

/* Click Dropdown Search */
(function(){
	"use strict";

	var btn = document.getElementById( 'search-menu-button-top' );

	// Close the dropdown menu if the user clicks outside of it
	if ( btn ) {
		btn.addEventListener(
			'click',
			function( e ) {
				e.stopPropagation();
				e.preventDefault();
				var dropdowns = document.querySelector( '.topsearchform' );
				var closebtn  = '<span class="icon_search"></span>';
				var searchbtn = '<span class="icon_search"></span>';
				dropdowns.classList.toggle( 'open' );
				if ( dropdowns.classList.contains( 'open' ) ) {
					btn.innerHTML = closebtn;
				} else {
					btn.innerHTML = searchbtn;
				}
				var getid = document.getElementById( 'search-topsearchform-container' );
				document.addEventListener(
					'click',
					function( e ) {
						if ( getid !== e.target && !getid.contains(e.target) ) {
							if ( dropdowns.classList.contains( 'open' ) ) {
								dropdowns.classList.remove( 'open' );
								btn.innerHTML = searchbtn;
							}
						}
					}
				);
			}
		);
	}

})();

/* Back to top */
( function() {
	"use strict";
	
	window.addEventListener(
	'scroll',
	function() {
		var elm = document.querySelector( '.top-header' );
		if ( document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ) {
			if ( elm !== null ) {
				elm.classList.add( 'sticky-menu' );
			}
		} else {
			if ( elm !== null ) {
				elm.classList.remove( 'sticky-menu' );
			}
		}
		var elmontop = document.querySelector( '.gmr-ontop' );
		if ( document.body.scrollTop > 85 || document.documentElement.scrollTop > 85 ) {
			if ( elmontop !== null ) {
				elmontop.style.display = 'block';
				document.querySelector( '.gmr-ontop' ).addEventListener(
					'click',
					function( e ) {
						e.preventDefault();
						window.scroll({top: 0, left: 0, behavior: 'smooth'});
					}
				);
			}
		} else {
			if ( elmontop !== null ) {
				elmontop.style.display = 'none';
			}
		}

	});
})();

/* Light off player */
(function(){
	"use strict";

	var btn = document.getElementById( 'gmr-button-light' );
	var lightoff = document.getElementById( 'lightoff' );

	// Close the dropdown menu if the user clicks outside of it
	if ( btn ) {
		btn.addEventListener(
			'click',
			function( e ) {
				e.stopPropagation();
				e.preventDefault();
				var elme = document.querySelector( '.player-wrap' );
				if ( elme !== null ) {
					elme.classList.add( 'relative-video' );
				}
				lightoff.style.display = 'block';
			}
		);
	}
	if ( lightoff ) {
		lightoff.addEventListener(
			'click',
			function( e ) {
				e.stopPropagation();
				e.preventDefault();
				var elme = document.querySelector( '.player-wrap' );
				if ( elme !== null ) {
					elme.classList.remove( 'relative-video' );
				}
				lightoff.style.display = 'none';
			}
		);
	}

})();

/* Mediabox */
(function(){
	"use strict";
	MediaBox( '.gmr-trailer-popup' );
})();
