// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('Message received in background script:');
    if (request.action === "sendPageContent") {
        // Extract content from the message
        const content = request.content;
        // Do something with the content (e.g., display it)
        console.log('Content of the current page:', content);
        // Alternatively, you can send the content to the extension popup
        // chrome.runtime.sendMessage({ action: "displayContent", content: content });
    }
});
