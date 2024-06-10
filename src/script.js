let input = window.document.querySelector('#input')
let output = window.document.querySelector('#output')
let isLastChar = false;

const add = (value) => {
    if (input.innerText.length <= 10) {
        if (input.innerText === '0') {
            input.innerText = value;
        } else {
            input.innerText += value;
        }
    }
};


const calcOutPut = () => {
    output.innerText = eval(input.innerText)
}

const addNum = (num) => {
    add(num);
    isLastChar = false;
    calcOutPut();
    cleanNums();
};

const addChar = (char) => {
    if(!isLastChar) add(char);
    isLastChar = true;
};

const cls = () => {
    input.innerText = '0';
    output.innerText = '0';
};

