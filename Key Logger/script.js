document.addEventListener('keydown', (event) => {
    const logDiv = document.getElementById('log');
    const keyInfo = `Key: ${event.key} | Code: ${event.code}`;
    
    // Append the keypress to the log
    const newEntry = document.createElement('div');
    newEntry.textContent = keyInfo;
    logDiv.appendChild(newEntry);
  
    // Scroll to the bottom of the log
    logDiv.scrollTop = logDiv.scrollHeight;
  });
  