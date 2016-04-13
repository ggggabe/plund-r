

chrome.runtime.sendMessage( { method: "getStatus"}, function(response) {
    console.log("RECEIVED");
    console.log(response);
});

chrome.runtime.onMessage.addListener( function(request, sender, sendRespons){
    console.log('
});


//When does this load? I think it's specified in the manifest. WTF are the best practices for content scripts? 
var comments = $('.comments');

for( var i = 0;i < comments.length; i ++){
    console.log(comments[i].href);
}
