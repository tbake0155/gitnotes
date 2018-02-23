chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"gitnotes.js"});
	chrome.tabs.reload();
});
