function tharBeGold( data ) {
    return data.indexOf('gilded-icon');
}

function markMeGold( link ) {
    $('a[href="'+link+'"]').addClass('contains-gold');
}

function scrape( link ) { //takes a string and scrapes that stuff.
    $.get( link, function( data, status, xhr ) {
        if( tharBeGold( data ) >= 0){
            markMeGold( link ); 
        }
    });
}

function plundr() {

    console.log("PLUNDERING");
    var comments = $('.comments');

    for( var i = 0;i < comments.length; i ++){
        scrape(comments[i].href);
    }

}

function unplundr() {
    $('.comments').css('color','');
    console.log("UNPLUNDERING");
}

function plundrable(){

    chrome.runtime.sendMessage( {plundrable : true} , function(response) {
        if( response.plundrable == true) {
            plundr();
        }
    });

}

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){

    //Listens for plundr on
    if( request.active ){
        plundr();
    }
    else {
        unplundr();
    }

});

$(function() {
    plundrable();
});
