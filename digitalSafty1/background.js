chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getCurrentTabUrl") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const currentTabUrl = tabs[0] ? tabs[0].url : null;
            sendResponse({ currentTabUrl: currentTabUrl });
        });
        // Return true to indicate that sendResponse will be called asynchronously
        return true;
    }
});
