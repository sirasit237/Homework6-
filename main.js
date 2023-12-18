// const counter = document.querySelector('.counter')
// const btnInc = document.querySelector('.btn-inc')
// const btnDec = document.querySelector('.btn-dec')
// const btnClr = document.querySelector('.btn-clr')
// const number = document.querySelector('.number')

// let countNum = 0

// function updatateCounter(n) {
//     if(countNum + n < 0) {
//         return
//     }
//     countNum += n
//     number.textContent = countNum
// }

// btnInc.addEventListener('click', () => updatateCounter(1))
// btnDec.addEventListener('click', () => updatateCounter(-1))
// btnClr.addEventListener('click', () => updatateCounter(-countNum))

// --------------------------------------------------------------------

//  <div class="counter">
//     <button class="btn btn-inc">+</button>
//     <h3 class="number">0</h3>
//     <button class="btn btn-dec">-</button>
//     <button class="btn btn-clr">C</button>
//   </div> 

// const counter = document.querySelector('.counter')
// const btnInc = document.querySelector('.btn-inc')
// const btnDec = document.querySelector('.btn-dec')
// const btnClr = document.querySelector('.btn-clr')
// const number = document.querySelector('.number')

// let countNum = 0

// function updatateCounter(n) {
//     if(countNum + n < 0) {
//         return
//     }
//     countNum += n
//     number.textContent = countNum
// }

// btnInc.addEventListener('click', () => updatateCounter(1))
// btnDec.addEventListener('click', () => updatateCounter(-1))
// btnClr.addEventListener('click', () => updatateCounter(-countNum))

// --------------------------------------------------------------------

const root = document.querySelector('#root')
const btnAdd = document.querySelector('.btn-add')
const sumInfo = document.querySelector('.show-sum')

let total = 0 

function Counter() {

    let countNum = 0;



const makeElement = (tag, attr_n, attr_v, content) => {
    let output = document.createElement(tag);
    output.setAttribute(attr_n, attr_v);
    output.textContent = content;
    return output;
}



const updatateCounter = (n) => {
    if(countNum + n < 0) {
        return
    }
    countNum += n
    total += n
    number.textContent = countNum
    sumInfo.textContent = `Sum = ${total}`
}

const delCounter = (e) => {
    updatateCounter(-countNum)
    e.target.closest('.counter').remove();

}

const counter = makeElement('div', 'class', 'counter', '' )
const btnInc = makeElement('button', 'class', 'btn-inc', '+' )
const number = makeElement('h3', 'class', 'number', '0' )
const btnDec = makeElement('button', 'class', 'btn-dec', '-' )
const btnClr = makeElement('button', 'class', 'btn-clr', '0' )
const btnDel = makeElement('button', 'class', 'btn-del', 'x' )

btnInc.addEventListener('click', () => updatateCounter(1))
btnDec.addEventListener('click', () => updatateCounter(-1))
btnClr.addEventListener('click', () => updatateCounter(-countNum))
btnDel.addEventListener('click', delCounter)


counter.append(btnInc, number, btnDec, btnClr, btnDel)
counter.append(btnInc)
counter.append(number)
counter.append(btnDec)
counter.append(btnClr)
counter.append(btnDel)

return counter
}

const hdlAddCounter = () => {
    root.append(Counter())
}

btnAdd.addEventListener('click', hdlAddCounter)