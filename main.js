let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
let specialChar = '!@#$%^&_+?/\\=-'
let number = '123456789'
number= number.split('')
capitalLetter = capitalLetter.split('')
lowerLetter = lowerLetter.split('')
specialChar = specialChar.split('')
let allElement = [capitalLetter,lowerLetter,specialChar,number]
let allReq = new Set(number.flat(1))


const pwdField = document.querySelector('.pwdField')
const generateButton = document.querySelector('button')
const generateButtonWarning = document.querySelector(':root')
const capitalButton = document.querySelector('#capitalLetters')
const lowerButton = document.querySelector('#lowerLetters')
const specialButton = document.querySelector('#specialChar')
const pwdLenght = document.querySelector('#pwdLenght')
const numberField = document.querySelector('#numberField')
const allChar = document.querySelector('#allChar')
pwdLenght.addEventListener('keypress',(evt)=>evt.preventDefault())
let allButton = [capitalButton,lowerButton,specialButton,numberField]
numberField.checked = true

class Checkbox{
   constructor(checkbox,listToAdd){
    this.checkbox = checkbox
    this.list = listToAdd
   }
   isChecked() {
    if(this.checkbox.checked === true){
        this.list.map(e=>allReq.add(e))
        allChar.checked = false
    }
    else{
        this.list.map(e=> allReq.delete(e))
        
    }
   }
}
capitalButton.onclick = ()=>{new Checkbox(capitalButton,capitalLetter).isChecked()};
lowerButton.onclick = ()=>{new Checkbox(lowerButton,lowerLetter).isChecked()};
specialButton.onclick = ()=>{new Checkbox(specialButton,specialChar).isChecked()};
numberField.onclick = ()=>{new Checkbox(numberField,number).isChecked()};
allChar.onclick = ()=>{
    if(allChar.checked === true){
        allElement.map(e=>e.map(ele=>allReq.add(ele)))
    }
    else{
        allElement.map(e=>e.map(ele=>allReq.delete(ele)))
        
    }
    allButton.map(button=>
      button.checked = false  
    )
}
generateButton.onclick = ()=>{
    let list = Array.from(allReq)
    let pwd = ''
    for (let i = 0; i < pwdLenght.value ; i++){
        let randomNum = Math.floor(Math.random() * allReq.size)
        for (let item of list){
            if (list.indexOf(item) === randomNum){
                pwd += item
            }
        }
    }
    if  (!allButton.some(button=>button.checked !== false || allChar.checked == true)){
        generateButtonWarning.style.setProperty('--opacity','1')
    }else{
        generateButtonWarning.style.setProperty('--opacity','0')
    }

    pwdField.innerHTML = pwd
}
