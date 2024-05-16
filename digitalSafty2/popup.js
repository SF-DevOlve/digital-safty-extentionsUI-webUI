

 
document.addEventListener('DOMContentLoaded', function() {
    const activateButton = document.getElementById('activateButton');
    
    activateButton.addEventListener('click', function() {
        chrome.tabs.create({ url: 'activation.html' });
    });
});

//log the current tab in the button of logTab buttun 
document.addEventListener('DOMContentLoaded', function() {
    const logTabButton = document.getElementById('logTabButton');
    
    logTabButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const currentTabUrl = tabs[0].url;
            alert("Current Tab URL: " + currentTabUrl);
        });
    });
});




// document.addEventListener('DOMContentLoaded', function() {
//     const scanPageButton = document.getElementById('scanPageButton');

//     scanPageButton.addEventListener('click', function() {
//         // Get the current tab's URL
//         chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//             const url = tabs[0].url;
//             // Send a request to the backend to scan the URL
//             fetch('https://your-backend-url.com/scan', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ url: url })
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Scan result:', data);
//                 // Handle the scan result as needed
//             })
//             .catch(error => {
//                 console.error('Error scanning URL:', error.message);
//             });
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const displayContentButton = document.getElementById('displayContentButton');

    displayContentButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const currentTabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: { tabId: currentTabId },
                function: injectScript // Call a function to inject the script
            });
        });
    });

    // Function to be injected as a content script
    function injectScript() {
        // Find the container element that holds the email content
        const emailContainer = document.querySelector('.adn.ads');
        if (emailContainer) {
            // Extract the plain text content of the email
            const emailText = emailContainer.innerText;
            // Send the content to the background script
            chrome.runtime.sendMessage({ action: "sendPageContent", content: emailText });
        } else {
            console.error('Email container not found.');
        }
    }
});


