 chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var reg = '/.*/'; 
    if( reg.test(tab.url) ) {
        chrome.pageAction.show(tabId);
    }
});