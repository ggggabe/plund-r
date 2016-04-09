chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab.url.search('reddit'));
    if( tab.url.search('reddit') < 0) {
        chrome.tabs.create({ url: "https://www.reddit.com" });
    }
});
