chrome.runtime.sendMessage({ action: "getCurrentTabUrl" }, function(response) {
  if (response && response.currentTabUrl) {
      // Open a new tab with the current tab URL
      chrome.tabs.create({ url: response.currentTabUrl });
      // Send a request to the backend to scan the URL
      // fetch('https://your-backend-url.com/scan', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({ url: response.currentTabUrl })
      // })
  } else {
      console.error("Unable to retrieve current tab URL.");
  }
});
