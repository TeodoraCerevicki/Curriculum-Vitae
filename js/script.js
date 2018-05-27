// Smooth Scroll
$(function () {
    $('a').click(function () {
        
        var id = $(this).attr('href');
        var offTop = $(id).offset().top;
        $('html, body').animate({
            scrollTop: offTop
        }, 500);
        return false;
    });
});


// Icon appear 
            
            $(document).scroll(function() {
                var y = $(this).scrollTop();
                if (y > 300 ) {
                    $('.social a, .back-to-top-arrow').fadeIn();
                } else {
                    $('.social a, .back-to-top-arrow').fadeOut();
                }
            });


//Back to the top

$('.back-to-top-arrow').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


 // Sidebar Slide

$(function(){
    $('.burger-menu').click(function(){
        
        $('.close, .overlay').show();
        
        $('.side-nav-bar').addClass('active')
    });
    
    $('.overlay, .close').click(function(){
        $('.side-nav-bar').removeClass('active');
        $('.overlay, .close').hide();
    });
});