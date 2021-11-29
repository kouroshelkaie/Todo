// Assets
const addBtn = document.querySelector(".add_button")
const filterBtn = document.querySelector(".filter_button")
const addInput = document.querySelector('#add_input')
const filterInput = document.querySelector('#filter_input')

// hide/visible inputs
addBtn.addEventListener('click',e=>{
    addInput.style.display = "block"
    filterInput.style.display = "none"
})

filterBtn.addEventListener('click',e=>{
    filterInput.style.display = "block"
    addInput.style.display = "none"
})

