var btn =document.getElementById('btn')
var mdl_back = document.querySelector('.mdl-background')
var modal = document.querySelector('.modal')
var btn_close = document.getElementById('btn_close')
var btn_add = document.getElementById('add')

btn.addEventListener('click',()=>{
    modal.style.display = 'block'
    mdl_back.style.display = 'block'
})
btn_close.addEventListener('click',()=>{
    modal.style.display = 'none'
    mdl_back.style.display = 'none'
    
})
btn_add.addEventListener('click',()=>{
    modal.style.display = 'none'
    mdl_back.style.display = 'none'
    
})