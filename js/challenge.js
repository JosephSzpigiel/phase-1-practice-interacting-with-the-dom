const counter = document.querySelector("#counter")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const likes = document.querySelector("#heart")
const pause = document.querySelector('#pause')
const div = document.querySelector('#list')
const form = document.querySelector('#comment-form')

console.log(minus, plus)

let pauseWasClicked = false

minus.addEventListener("click", incrementor)
plus.addEventListener("click", incrementor)
likes.addEventListener("click", liker)

const numberLikes = {}

function incrementor(e){
    if (!pauseWasClicked){
    const operation = e.target.id
    if (operation === 'minus'){
        counter.textContent--
    } else if (operation === 'plus'){
        counter.textContent++
    }}
}

function liker(e){
    if (!pauseWasClicked){
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
    }}


}
// while (let i < Infinity){...}

setInterval(()=>{
    if (!pauseWasClicked){
    counter.textContent++}
},1000)
pause.addEventListener('click',stopFunc)

function stopFunc(){
    if (!pauseWasClicked){
        pauseWasClicked=true
        pause.textContent = 'resume'
    }
    else {
        pauseWasClicked = false
        pause.textContent = 'pause'
    }
    

}
form.addEventListener('submit', submitFunc)

function submitFunc (event){
    event.preventDefault()
    const comment = event.target.comment.value
    const p = document.createElement('p')
    p.textContent = comment
    div.append(p)
}


// setInterval(()=>{
//     counter.textContent--
// },1000)

// create list elements with the number displyed and the amount of times it was liked
// append that to ul

