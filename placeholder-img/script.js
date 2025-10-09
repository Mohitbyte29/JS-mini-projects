const select = document.querySelector('select')
const inputAll = document.querySelectorAll('input')
// Have to use later
let myImg = document.querySelector('img');
let textArea = document.querySelector('textArea')

console.log(inputAll);

let urlObj = {

}

const removeHashtag = (str) => {
    return str.replace('#', "")
}

const addPlus = (str) => {
    return str.split(" ").join("+");
}

const createImagePath = () => {
    urlObj.size = select.value;
    urlObj.text = addPlus(inputAll[0].value);
    urlObj.bgClr = removeHashtag(inputAll[1].value);
    urlObj.txtClr = removeHashtag(inputAll[2].value);
    

    let urlPath = `https://placehold.co/${urlObj.size}/${urlObj.bgClr}/${urlObj.txtClr}?text=${urlObj.text}`
    myImg.src = urlPath;
    textArea.value = urlPath;

}

select.addEventListener('change', createImagePath)

// We can't apply addEventListener to an array so we run loop

// inputAll.addEventListener('change', createImagePath);
inputAll.forEach((currElement) => currElement.addEventListener('change', createImagePath));



