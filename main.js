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
        let create_div = document.createElement('div')
        let array_orders = [name1.value, sel1.value, sel2.value]
        let make_string = array_orders.toString()
        let brk = make_string.split(',')
        let res = brk.join('<br>')
        create_div.innerHTML = res
        create_div.className = 'div_orders'

        document.body.appendChild(create_div)
    }
}