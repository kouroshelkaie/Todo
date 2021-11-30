// Assets
const addBtn = document.querySelector(".add_button")
const filterBtn = document.querySelector(".filter_button")
const addInput = document.querySelector('#add_input')
const filterInput = document.querySelector('#filter_input')
const addForm = document.querySelector("#add")
const filterForm = document.querySelector('#filter')
const container = document.querySelector('.tasks_container')

let task = []

// hide/visible inputs
addBtn.addEventListener('click',e=>{
    addInput.style.display = "block"
    filterInput.style.display = "none"
})
filterBtn.addEventListener('click',e=>{
    filterInput.style.display = "block"
    addInput.style.display = "none"
})


// keep data on array and DOM when we refreshed the page
let getTask = localStorage.getItem("tasks")
if(getTask) {
    task = JSON.parse(getTask)
 
}


// submit for store data
addForm.addEventListener('submit',e=>{
    e.preventDefault()
    let inputValue = addInput.value
    task.push(inputValue)

    // put on localStorage
    localStorage.setItem("tasks",JSON.stringify(task))
    dom()
})

// put data on DOM
const dom = ()=>{
    container.innerHTML = ""
    task.forEach((item)=>{
        let li = document.createElement('li')
        let p = document.createElement('p')
        let sp = document.createElement('span')

        p.textContent = item
        sp.innerHTML = "&times;"
        li.appendChild(p)
        li.appendChild(sp)

        container.appendChild(li)
    })
}