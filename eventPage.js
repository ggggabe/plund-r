chrome.browserAction.onClicked.addListener(function(tab) {
    if( tab.url.search('reddit') < 0) {
        chrome.tabs.create({ url: "https://www.reddit.com" });
        chrome.storage.sync.set({'active' : true}, function() {
            chrome.browserAction.setIcon({
                path : {
                    "128": "./plundr-open.png"
                }
            });
            console.log('plund\/r\/ on');
        });
    }
    else {
        chrome.storage.sync.get('active',
            function(obj){
                if(obj.active) {
                    chrome.storage.sync.set({'active' : false}, function() {
                        chrome.browserAction.setIcon({
                            path : {
                                "128" : "./plundr.png"
                            }
                        });
                        console.log('toggled off');
                    });
                }
                else {

                    chrome.storage.sync.set({'active' : true}, function() {
                        chrome.browserAction.setIcon({
                            path : {
                                "128" : "./plundr-open.png"
                            }
                        });
                        console.log('toggled on');

                    });
                }
            }
        );
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if( request.method == "getStatus" ) {
        console.log(chrome.storage.sync.get('active'));
    }
    else {
        sendResponse({});
    }
});
