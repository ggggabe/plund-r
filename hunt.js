function arrYeReady() {
    $('body').css('overflow','hidden');
    $('body').prepend("<div class='plundr'><h2 style='color:#fff !important'>Thar be <span class='gold'>gold</span> up ahead, /r/ ye ready?</h2></div>");

}

function tharBeGold() {
    var allTheGolds = $('.gilded-icon');
    var allThePosts = allTheGolds.parents('.entry');

    return allThePosts.length > 0;
}

function yerLookinFerGold() {
    chrome.runtime.sendMessage({ plundrable : true }, function(response) {
        if(response.plundrable == true) {
            arrYeReady();
        }
    });
}

$(function(){

    if( tharBeGold() ) {
        yerLookinFerGold();
    }

});
