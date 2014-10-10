$(window).load(function () {
    var $content = $('#content');
   
    // Initialize Masonry
    $content.masonry({
        // settings
		columnWidth: 450,
        itemSelector: '.entry'
        // stamp: ".stamp"
    })

 //    // Initialize Infinite-Scroll
 //    $content.infinitescroll({
 //        // settings
 //        navSelector : 'div#pagination',
 //        nextSelector : 'div#pagination a#nextPage',
 //        itemSelector : '.entry',
 //        loading: {
 //            finishedMsg: '',
 //            img: ''
 //            },
 //        bufferPx : 600,
 //        debug : false,
	// },

    // call masonry as a callback.
    // function( newElements ) {
    //     window.n = window.n || 0;
    //     Tumblr.LikeButton.get_status_by_page(++window.n);
    //     var $newElems = $( newElements );
    //     $newElems.hide();
    //     // ensure that images load before adding to masonry layout
    //     $newElems.imagesLoaded(function(){
    //         $content.masonry( 'appended', $newElems, true, function(){$newElems.fadeIn(300);} );
    //     });
    
    // };

});