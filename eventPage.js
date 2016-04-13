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
                    chrome.storage.sync.set({ active : false}, function() {

                        chrome.browserAction.setIcon({ path : { "128" : "./plundr.png" }} );

                        chrome.tabs.query({}, function(tabs) {

                            var message = { active : false };

                            for( var i=0; i < tabs.length; i++ ) {
                                chrome.tabs.sendMessage(tabs[i].id, message);
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

                        chrome.tabs.query({}, function(tabs) {

                            var message = { active : true };

                            for( var i=0; i < tabs.length; i++ ) {
                                chrome.tabs.sendMessage(tabs[i].id, message);
                            }

                        });

                        console.log('toggled on');

                    });
                }
            }
        );
    }
});

