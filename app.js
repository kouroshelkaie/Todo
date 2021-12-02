// Assets
const addBtn =      document.querySelector(".add_button")
const filterBtn =   document.querySelector(".filter_button")
const addInput =    document.querySelector('#add_input')
const filterInput = document.querySelector('#filter_input')
const addForm =     document.querySelector("#add")
const filterForm =  document.querySelector('#filter')
const container =   document.querySelector('.tasks_container')
const error =       document.querySelector('.error')
const clear =       document.querySelector('#clear')
const clearAll =    document.querySelector('#clear_all')
const theme =       document.querySelector('.theme_button')
const fontAwesom =  document.querySelector('#font_awesome')
let flag = 1
let task = []
  
// hide/visible inputs
addBtn.addEventListener('click',e=>{
    addInput.style.display = "block"
    filterInput.style.display = "none"
    addInput.focus()
})
filterBtn.addEventListener('click',e=>{
    filterInput.style.display = "block"
    addInput.style.display = "none"
    filterInput.focus()
})

// put data on DOM
const dom = (data)=>{
    container.innerHTML = ""
    data.forEach((item,index)=>{
        let li = document.createElement('li')
        let sp = document.createElement('span')
        let p = document.createElement('p')
        p.classList.add("para")
        p.textContent = item.todo
    // done task stroke
    p.addEventListener('click',e=>{
        if(item.done === true) {
            // update in array
            item.done = false
            // update the new array in localStorage
            localStorage.setItem("tasks",JSON.stringify(data))
            // update the new array in DOM
            dom(task)
        } else {
            item.done = true
            localStorage.setItem("tasks",JSON.stringify(data))
            dom(task)    
        }
    })
        p.style.textDecoration = item.done ? "initial":"line-through"

        sp.innerHTML = "&times;"
        li.appendChild(p)
        li.appendChild(sp)
        container.prepend(li)
        sp.classList.add('close_button')

    // delete task
        sp.addEventListener('click',e=>{
            // detele from array
            data.splice(index,1 )
            // update new array in localStorage
            localStorage.setItem("tasks",JSON.stringify(data))
            // update new array in DOM
            dom(task)
        })
    })
}


// keep data on array and DOM when we refreshed the page
let getTask = localStorage.getItem("tasks")
if(getTask) {
    task = JSON.parse(getTask)
    dom(task)
}

// submit for store data
addForm.addEventListener('submit',e=>{
    e.preventDefault()
    let inputValue = addInput.value
    if(inputValue) {
        task.push({
            todo: inputValue,
            done : true
        })
        // =====localStorage====
        localStorage.setItem("tasks",JSON.stringify(task))
        dom(task)
        addInput.value = ""
    } else {
        addInput.classList.add("input_error")
        error.style.display = "block"
        addInput.addEventListener('input',e=>{
            addInput.classList.remove("input_error")
            error.style.display = "none"
        })
    }
})

// dark theme
theme.addEventListener("click",e=>{
    if(fontAwesom.classList.contains('fa-moon')){
        fontAwesom.classList.remove('fa-moon')
        fontAwesom.classList.add('fa-sun')
    } else{
        fontAwesom.classList.remove('fa-sun')
        fontAwesom.classList.add('fa-moon')
    }
 
    document.body.classList.toggle("dark_background")
})


