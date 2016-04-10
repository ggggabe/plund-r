chrome.browserAction.onClicked.addListener(function(tab) {
    if( tab.url.search('reddit') < 0) {
        chrome.tabs.create({ url: "https://www.reddit.com" });
        chrome.storage.sync.set({'active' : true}, function() {
            console.log('plund\/r\/ on');
        });
    }
    else {
        chrome.storage.sync.get('active',
            function(obj){
                if(obj.active) {
                    chrome.storage.sync.set({'active' : false}, function() {
                        console.log('toggled off');

                    });
                }
                else {
                    chrome.storage.sync.set({'active' : true}, function() {
                        console.log('toggled on');

                    });
                }
            }
        );
    }
});

