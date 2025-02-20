function fetchJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        displayJoke(data.value)
    })
}

function displayJoke(joke){
    const jokeElement = document.getElementById('joke');
    jokeElement.innerHTML = `<p>${joke}</P>`
}