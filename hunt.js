$(document).ready(function(){
    var allTheGolds = $('.gilded-icon');
    var allThePosts = allTheGolds.parents('.entry');
    var tharBeGold = allThePosts.length > 0;

    console.log(tharBeGold ? allThePosts : "Yar, tain't no gold!");
});