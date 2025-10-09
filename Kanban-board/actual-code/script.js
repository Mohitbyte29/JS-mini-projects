const cards = document.querySelectorAll('.card')
const lists = document.querySelectorAll('.list')

for(const card of cards){
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
}

for(const list of lists){
    list.addEventListener('dragover', dragOver)
    list.addEventListener('dragenter', dragEnter)
    list.addEventListener('dragleave', dragLeave)
    list.addEventListener('drop', dragDrop)
}

function dragStart(e) {
    // this allows the drop location to know which element is being moved you release it
    e.dataTransfer.setData("text/plain", e.target.id);
}


function dragEnd(e) {
    console.log("Drag ended");
}

function dragEnter(e) {
    // this line is very important bcoz by default, browsers don't allow you to drop elements onto other elements.
    e.preventDefault();
    e.target.classList.add("over")
}

function dragOver(e) {
    // this line is very important bcoz by default, browsers don't allow you to drop elements onto other elements.
    e.preventDefault();
}

function dragLeave(e) {
    e.target.classList.remove("over");
}

function dragDrop (e) {
    e.preventDefault()
    const id = e.dataTransfer.getData("Text/plain")

    const card = document.getElementById(id)
    // We append something in different list
    e.target.appendChild(card)
    e.target.classList.remove("over")
}
