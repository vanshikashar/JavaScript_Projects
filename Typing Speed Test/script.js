const typingText = document.querySelector('.typing-text p')
const input = document.querySelector('.wrapper .input-field')
const time = document.querySelector('.time span b')
const mistakes = document.querySelector('.mistake span')
const wpm = document.querySelector('.wpm span')
const cpm = document.querySelector('.cpm span')
const btn = document.querySelector('button');

//set value
let timer;
let maxTime= 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake =0;
let isTyping = false;


function loadParagraph(){
    const paragraph= [ "The sun rises in the east and sets in the west. Every morning brings a new opportunity to start fresh. A positive mindset can turn an ordinary day into a great one.", "Practice makes perfect. The more you do something, the better you become at it. Never be afraid to make mistakes because every mistake is a lesson in disguise.", "Reading books expands the mind and fuels creativity. A good book can take you on an adventure without ever leaving your chair. The more you read, the more you learn.", "Time is the most valuable resource. Once lost, it can never be regained. Use it wisely and focus on what truly matters in life.", "A journey of a thousand miles begins with a single step. No goal is too big if you break it into small, manageable actions. Keep moving forward, no matter how slow.", "The sound of rain on a quiet night is soothing. It brings a sense of peace, washing away the worries of the day like a gentle lullaby.", "The key to learning is curiosity. When you ask questions and seek answers, knowledge becomes an exciting adventure rather than a boring task.", "A simple smile has the power to brighten someone's day. Kindness costs nothing but can create a lasting impact on those around you.", "Nature is full of wonders. From the tallest mountains to the smallest insects, every living thing has a purpose in the delicate balance of life.", "Patience is a virtue that leads to success. Great things take time, and rushing often leads to mistakes. Stay calm and trust the process."
];

const randomIndex = Math.floor(Math.random()*paragraph.length);
typingText.innerHTML='';
for(const char of paragraph[randomIndex]){
console.log(char);
typingText.innerHTML+= `<span>${char}</span>`;
}
typingText.querySelectorAll('span')[0].classList.add('active');
document.addEventListener('keydown',()=>input.focus());
typingText.addEventListener("click",()=>{
    input.focus()})
}

//Handle user input
function initTyping(){
    const char= typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);
    if(charIndex < char.length && timeLeft >0){

        if(!isTyping){
            timer = setInterval(initTime,1000);
            isTyping=true;
        }

        if(char[charIndex].innerText === typedChar){
            char[charIndex].classList.add('correct');
            console.log("correct");
        }
        else{
            mistake++ ;
            char[charIndex].classList.add('incorrect');
            console.log("incorrect");
        }
        charIndex++;
        char[charIndex].classList.add('active');

        mistakes.innerText = mistake;
        cpm.innerText = charIndex- mistake;
    }
    else{
clearInterval(timer);
input.value='';
    }
}

function initTime(){
    if(timeLeft>0){
        timeLeft--;
        time.innerText=timeLeft;
        let wpmVal = Math.round(((charIndex - mistake)/5) /(maxTime - timeLeft)*60);
        wpm.innerText = wpmVal;
    }
    else{
        clearInterval(timer);
    }
}

function reset(){
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerText= timeLeft;
    input.value='';
    charIndex = 0;
    mistake =0;
    isTyping = false;
    wpm.innerText=0;
    cpm.innerText=0;
    mistakes.innerText=0;
}


input.addEventListener("input",initTyping);
btn.addEventListener("click",reset);
loadParagraph();