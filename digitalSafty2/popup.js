

 
document.addEventListener('DOMContentLoaded', function() {
    var activateButton = document.getElementById('activateButton');

    activateButton.addEventListener('click', function() {
        chrome.tabs.create({url: 'http://localhost:3000/'});
    });

    var logTabButton = document.getElementById('logTabButton');
    logTabButton.addEventListener('click', function() {
        // Action for logging the current tab
    });

    var displayContentButton = document.getElementById('displayContentButton');
    displayContentButton.addEventListener('click', function() {
        // Action for scanning email content
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
            const currentTabUrl = tabs[0].url;
            if (isEmailTab(currentTabUrl)) {
                chrome.scripting.executeScript({
                    target: { tabId: currentTabId },
                    function: injectEmailScript
                });
            } else {
                chrome.scripting.executeScript({
                    target: { tabId: currentTabId },
                    function: injectFullPageScript
                });
            }
        });
    });

    function isEmailTab(url) {
        // Implement your logic to check if the URL represents an email page
        // For example, you can check if the URL contains "mail.google.com" or any other pattern
        return url.includes("mail.google.com");
    }

    // Function to be injected when the current tab is an email page
    function injectEmailScript() {
        const emailContainer = document.querySelector('.adn.ads');
        if (emailContainer) {
            
            const emailText = emailContainer.innerText;
            const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
            const emails = emailText.match(emailRegex);
            if (emails && emails.length > 0) {
                const emailAdress = emails[0];
                chrome.runtime.sendMessage({ action: "sendPageContent", content: {email_adress: emailAdress , email_content: emailText} });
            } else {
                console.error('No email address found.');
            }
        } else {
            console.error('Email container not found.');
        }
    }
    

    // Function to be injected when the current tab is not an email page
    function injectFullPageScript() {
        const content = document.documentElement.outerHTML;
        chrome.runtime.sendMessage({ action: "sendPageContent", content: content });
    }
});
