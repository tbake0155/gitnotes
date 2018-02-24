function getCurrentTabUrl(callback){
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, (tabs) => {
        var tab = tabs[0];
        var url = tab.url;
        console.assert(typeof url == 'string', 'tab.url should be a string');
        callback(url);
    });
}

var script = 'if(document.body.innerHTML == original_doc){document.body.innerHTML = modded_doc;}else{document.body.innerHTML = original_doc;}'

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url)  => {
    document.getElementById('on_off').addEventListener('click', () => {
        chrome.tabs.executeScript({
            code: script
        });
    });
  });
});

