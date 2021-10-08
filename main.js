let name1 = document.getElementById('name')
let sel1 = document.getElementById('sel1')
let sel2 = document.getElementById('sel2')
let radp = document.getElementById('p')
let radg = document.getElementById('g')
let cash = document.getElementById('cash')
let cc = document.getElementById('cc')
let send1 = document.getElementById('add')

function send() {
    if(name1.value.length == 0 ){
        alert('[ERROR] Insira um valor valido!')
    }else {
        let div = document.createElement('div')
        div.id = 'div1'
        div.className = 'div1'
        document.body.appendChild(div)
        div.innerHTML = sel1.value, '/n'
        div.innerHTML = name1.value

    }
}