let name1 = document.querySelector('input#name')
let sel1 = document.querySelector('selector#sel1')
let sel2 = document.querySelector('selector#sel2')
let radp = document.querySelector('input#p')
let radg = document.querySelector('input#g')
let cash = document.querySelector('input#cash')
let cc = document.querySelector('input#cc')
let send1 = document.querySelector('input#add')

function send() {
    if(name1.value || sel1.value || sel2.value == 0){
        alert('[ERROR] Insira um valor valido!')
    }else {
        alert('Everything ok!')
    }
}