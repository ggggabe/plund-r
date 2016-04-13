/*
window.onload = function() {
    if ( plundrable() ) {
        plundr();
    }
}
*/

function scrape( link ) { //takes a string and scrapes that stuff.

    console.log(link);

}

function plundr() {
    console.log("PLUNDERING");
    var comments = $('.comments');

    for( var i = 0;i < comments.length; i ++){

        scrape(comments[i].href);

    }
}

function unplundr() {
    console.log("UNPLUNDERING");
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
