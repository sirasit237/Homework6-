const root = document.querySelector('#root')

function updateCounter(n) {
    let countNum = 0
    function makeElement(tag, attr_n, attr_v, content) {
        let output = document.createElement(tag)
        output.setAttribute(attr_n, attr_v)
        output.textContent =  content
    }
    function updateCounter(n) {
        if(countNum + n < 0) {
          return
        }
        countNum += n
        number.textContent = countNum
  }

  const counter = makeElement('div', 'class', 'counter')
  const btnInc = makeElement('btnInc', 'class', 'btn-inc')
  const number = makeElement('h3', 'class','number' ,'0')
  const btnDec = makeElement('button', 'class', 'btn-inc', '-')
  const btnClr = makeElement('button', 'class', 'btn-inc', '0')

  btnInc.addEventListener('click', () => updateCounter(1) )
  btnDec.addEventListener('click', () => updateCounter(-1))
  btnClr.addEventListener('click', () => updateCounter(-countNum))


  
  counter.append(btnInc)
  counter.append(number)
  counter.append(btnDec)
  counter.append(btnClr)

  return counter
}

root.append(counter())
root.append(counter())
root.append(counter())
root.append(counter())



  

  