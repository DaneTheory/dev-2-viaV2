//var displayActiveArtist = $("[data_display=active]");
//var displayDefaultArtist = $("[data_display=default]");

// MASONRY DISPLAY. MUST BE CALLED ON WINDOW LOAD BECASUE OF THE IMAGES
//$(window).load( function() {
//$(document).ready(function(){


     //var $container = $('#windowContainer');
    
    
    var $container = $('#windowContainer').imagesLoaded( function() {
		
		var $displayDefaultArtist = $("[data_display=default]");
	    
      $container.isotope({
        itemSelector : '.mainPhotoWrapper',
        masonry: {
			columnWidth: '.grid-sizer'
    	}
      });
  
  
	  //$container.isotope( 'insert', $displayDefaultArtist );
	
/*
	 $container.infinitescroll({
        itemSelector : '.mainPhotoWrapper',
        loading: {
            finishedMsg: 'No more pages to load.',
            img: 'http://i.imgur.com/qkKy8.gif'
          }
        },
        // call Isotope as a callback
        function( newElements ) {
          $container.isotope( 'appended', $( newElements ) ); 
        }
      );
*/
	
	
	
	});
	
 $(document).ready(function(){
    $('.mainPhotoWrapper').hover(function() {
        $(this).css('overflow','hidden');
        var $imgFind = $(this).find('.mainPhoto');
        var $dataFind = $(this).find('.infoOverlay');
        var $nameFind = $(this).find('.artistName');
        var $likeFind = $(this).find('.tumblrLikeButton');
        $imgFind.toggleClass('transition');
        $dataFind.toggleClass('animated fadeIn');
        $nameFind.toggleClass('animated fadeIn');
        $likeFind.toggleClass('animated fadeIn');
    });
  });

//});
//});

// DISPLAY ACTIVE ARTIST FIRST, THEN REST ON SCROLL
/*
$(document).ready(function(){

});
*/