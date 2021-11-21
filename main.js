let name1 = document.getElementById('name')
let sel1 = document.getElementById('sel1')
let sel2 = document.getElementById('sel2')
let radp = document.getElementById('p')
let radg = document.getElementById('g')
let cash = document.getElementById('cash')
let cc = document.getElementById('cc')
let send1 = document.getElementById('add')
let obs = document.getElementById('input_obs')

function send() {
    if(name1.value.length == 0 ||sel1.value.length == 0 || sel2.value.length == 0){
        alert('[ERROR] Insira um valor valido!')
    }else {
        let rad_size = ''
        if(radp.checked) {  
            rad_size = 'PEQUENO'
        }else {
            rad_size = 'GRANDE'
        }
        let rad_pay = ''
        if(cash.checked) {
            rad_pay = 'DINHEIRO'
        } else {
            rad_pay = 'CARTÃO'
        }
        let create_div = document.createElement('div')
        let array_orders = [name1.value, sel1.value, sel2.value, rad_size, rad_pay, obs.value]
        let array_up = array_orders.map(name => name.toUpperCase())
        let make_string = array_up.toString()
        let brk = make_string.split(',')
        let res = brk.join('<br>')
        create_div.innerHTML = res
        create_div.className = 'div_orders'

        document.body.appendChild(create_div)
    }
    name1.value = ''
    sel1.value = 0
    sel2.value = 0
    obs.value = ''
    name1.focus()
}