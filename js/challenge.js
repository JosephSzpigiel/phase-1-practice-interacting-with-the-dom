const counter = document.querySelector("#counter")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const likes = document.querySelector("#heart")
console.log(minus, plus)

minus.addEventListener("click", incrementor)
plus.addEventListener("click", incrementor)
likes.addEventListener("click", liker)

const numberLikes = {}

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

// create list elements with the number displyed and the amount of times it was liked
// append that to ul

