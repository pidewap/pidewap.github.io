// yt search player
jQuery(document).ready(function($) {
	$('.search-form input[type=text]').focus();
	
	if ( $('.items-list').length ) {
		$('.items-list').masonry({
			itemSelector: '.item'
		});
	}
	
	$('.btn-play').on('click', function() {
		var data_id = $(this).attr('data-id'), 
			data_title = $(this).attr('data-title'),
			data_source = $(this).attr('data-source');
			
		$('.player').html('');
		$('.btn-play').show();
		$('.btn-stop').hide();
			
		if ( window.XMLHttpRequest ) {
			xmlhttp = new XMLHttpRequest()
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		xmlhttp.open( "GET", dsz.url + "/player/" + data_source + "/" + data_id + "/" );
		xmlhttp.onreadystatechange = function() {		
			if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
				$('#player-' + data_id).html(xmlhttp.responseText);
				$(this).text("Stop");			
			}
		};
		
		xmlhttp.send(null);
		
		$(this).hide();
		$('#item-' + data_id + ' .btn-stop').show();
	});
	
	$('.btn-stop').on('click', function() {
		var data_id = $(this).attr('data-id');
			
		$('.player').html('');
		$(this).hide();
		$('.btn-play').show();
	});
});
// yt search suggest
jQuery(function() {
            jQuery( "#you-search" ).autocomplete({
              source: function( request, response ) {
                //console.log(request.term);
                var sqValue = [];
                jQuery.ajax({
                    type: "POST",
                    url: "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1",
                    dataType: 'jsonp',
                    data: jQuery.extend({
                        q: request.term
                    }, {  }),
                    success: function(data){
                        console.log(data[1]);
                        obj = data[1];
                        jQuery.each( obj, function( key, value ) {
                            sqValue.push(value[0]);
                        });
                        response( sqValue);
                    }
                });
              }
            });
});
// back to top button
$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});