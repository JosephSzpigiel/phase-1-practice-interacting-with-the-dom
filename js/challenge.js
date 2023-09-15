const counter = document.querySelector("#counter")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const likes = document.querySelector("#heart")
const pause = document.querySelector('#pause')
const div = document.querySelector('#list')
const form = document.querySelector('#comment-form')
const numberLikes = {}
let intervalId = setInterval(()=>{counter.textContent++},1000)


minus.addEventListener("click", incrementor)
plus.addEventListener("click", incrementor)
likes.addEventListener("click", liker)
pause.addEventListener('click',stopFunc)
form.addEventListener('submit', submitFunc)

function incrementor(e){
    const operation = e.target.id
    if (operation === 'minus'){
        counter.textContent--
    } else if (operation === 'plus'){
        counter.textContent++
    }
}

function liker(e){
    const currentNumber = counter.textContent
    if (numberLikes[currentNumber]){
        numberLikes[currentNumber]++
        document.getElementById(`${currentNumber}`).textContent = `${currentNumber} was liked ${numberLikes[currentNumber]} times`
    } else {
        const likeLine = document.createElement('li')
        likeLine.id = currentNumber
        numberLikes[currentNumber] = 1
        likeLine.textContent = `${currentNumber} was liked 1 time`
        document.querySelector('ul').append(likeLine)
    }
}

function stopFunc(){
    const buttons = document.querySelectorAll("#minus, #plus, #heart, #submit")
    if (pause.textContent === ' pause '){
        pause.textContent = ' resume '
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("disabled","")
        }
        clearInterval(intervalId)
    }
    else{
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].removeAttribute("disabled","")
        pause.textContent = ' pause '
        }
        clearInterval(intervalId)
        intervalId = setInterval(()=>{counter.textContent++},1000)
    }
}

function submitFunc (event){
    event.preventDefault()
    const comment = event.target.comment.value
    const p = document.createElement('p')
    p.textContent = comment
    div.append(p)
    event.target.reset()
}