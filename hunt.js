function arrYeReady() {
    $('body').css('overflow','hidden');
    $('body').prepend("<div class='plundr'><h2 id='plundr-message' style='color:#fff !important'>Thar be <span class='gold'>gold</span> up ahead, /r/ ye ready?</h2><h2 id='timer'>Do ye smell that?</h2><h2>Click the gold on a gilded comment to collect yer booty!</h2></div>");

    $('body').append('<div style="display:block;height:0;width:0;visibility:hidden;overflow:hidden;"><iframe width="420" height="315" src="https://www.youtube.com/embed/27mB8verLK8?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
}

function tharBeGold() {
    var allTheGolds = $('.gilded-icon');
    var allThePosts = allTheGolds.parents('.entry');

    return allThePosts.length >0;
}
function yerLookinFerGold() {
    chrome.runtime.sendMessage({ plundrable : true }, function(response) {
        if(response.plundrable == true) {
            arrYeReady();
            tick();
            $('a').click(function(e) {
                e.preventDefault();
                $(this).css('display','none');
            });
        }
    });
}

function tick(){
    var seconds = 3;
    var timer = setInterval(function() {
        seconds--;
        if( seconds == 2) {
            $('#timer').html("Do ye smell that?");
        }
        else if( seconds == 1) {
            $('#timer').html("The smell o' gold?");
        }   
        else if( seconds == 0 ) {
            $('#timer').html("TALLY HO!");
        }
        else{
            $('body').css('overflow','');
            $('.plundr').css('display','none');
            clearInterval(timer);
        }
    }, 1500);

}

$(function(){

    if( tharBeGold() ) {
        yerLookinFerGold();
    }

});
