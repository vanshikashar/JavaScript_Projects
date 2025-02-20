const dataForm = document.getElementById('dataForm');
const retrieveDataBtn = document.getElementById('retrieveData');
const savedDataDiv = document.getElementById('savedData');

dataForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        message: message,
        timestamp: new Date().toLocaleString
    };

    localStorage.setItem('savedData', JSON.stringify(data));
    alert('Data saved successfully!');

    dataForm.reset();
    });
    retrieveDataBtn.addEventListener('click', function(){
        const savedData = localStorage.getItem('savedData');

        if(savedData){
            const data = JSON.parse(savedData);
            savedDataDiv.innerHTML = `
            <h3>Retrieved Data: </h3>
            <p><strong>Name: </strong>${data.name}</p>
            <p><strong>Message: </strong>${data.message}</p>
            <p><strong>Saved on:</strong>${data.timestamp}</p>
            `;
        } else {
            savedDataDiv.innerHTML = '<p>No saved data found!</p>';
        }
    
});