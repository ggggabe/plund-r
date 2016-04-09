$(document).ready(function(){
    var allTheGolds = $('.gilded-icon');
    var allThePosts = allTheGolds.parents('.entry');
    var isThereGold = allThePosts.length > 0;

    console.log(isThereGold ? allThePosts : "Ain't no gold!");
});