// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('Message received in background script:');
    if (request.action === "sendPageContent") {
        // Extract content from the message
        const content = request.content;
        // Do something with the content (e.g., display it)
        console.log('Content of the current page:', content);
        // MAKE A REQUEST TO THE SERVER curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello World"}' https://47e1d4004481423987307ef4e65fa83f.api.mockbin.io/
        // fetch('https://47e1d4004481423987307ef4e65fa83f.api.mockbin.io/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ message: content }),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });

            console.log('Content of the current page after fetch' );




        // Alternatively, you can send the content to the extension popup
        // chrome.runtime.sendMessage({ action: "displayContent", content: content });
    }
});
