$( document ).ready(function() {
    
    
    setInterval(function(){
        $( '.star' ).each(function(){ $( this ).fadeTo(50, (Math.random()*.13+.87)); });
    }, 200 );
    
});