const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [ "Dreams demand action, not just admiration.","Be a voice, not an echo.","Rise. Hustle. Repeat.","Courage is the seed of change.","Create the life you can’t wait to wake up to.","Chase excellence, success will follow.","Your energy introduces you before you speak.","Storms make trees take deeper roots.","Live today like tomorrow isn’t promised.","Turn your obstacles into opportunities." ]

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quote.length);
    output.textContent = quote[random];
})