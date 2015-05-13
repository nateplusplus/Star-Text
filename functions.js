(function ($) {
    
    $.fn.starTwinkle = function(){
        this.each(function(){
            $( this ).fadeTo(50, (Math.random()*.13+.87));
        });
    };
    
}(jQuery));


$( document ).ready(function() {
    
    setInterval(function(){
        $( '.star' ).starTwinkle();
    }, 200 );
    
});