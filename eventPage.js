chrome.browserAction.onClicked.addListener(function(tab) {
    alert('clicked');
    $('div').css("background-color","red");
});
