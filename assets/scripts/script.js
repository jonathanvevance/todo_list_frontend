// Helper functions
const addListenersToTaskNode = (taskNode) => {

    // delete event listener
    const deleteButtonNode = taskNode.children[0]
    deleteButtonNode.addEventListener("click", function() {
        this.parentElement.remove()
    })

    deleteButtonNode.addEventListener("mouseover", function() {
        this.style.color = "#eb5b34"
    })

    deleteButtonNode.addEventListener("mouseout", function() {
        this.style.color = "white"
    })


    taskNode.addEventListener("click", function() {
        if (this.style.textDecoration === "line-through") {
            this.style.textDecoration = "none"
        } else {
            this.style.textDecoration = "line-through"
        }
    })

    taskNode.addEventListener("mouseover", function() {
        const deleteButtonNode = this.children[0]
        deleteButtonNode.style.display = "block"
    })

    taskNode.addEventListener("mouseout", function() {
        const deleteButtonNode = this.children[0]
        deleteButtonNode.style.display = "none"
    })
}

const createTaskNode = (taskString) => {
    const taskNode = document.createElement('li');
    taskNode.appendChild(document.createTextNode(taskString));

    // delete button
    const deleteButtonNode = document.createElement('i');
    deleteButtonNode.classList.add("far", "fa-trash-alt")
    taskNode.appendChild(deleteButtonNode)

    addListenersToTaskNode(taskNode)
    return taskNode
}

const addTask = (taskString) => {
    const taskNode = createTaskNode(taskString)
    taskListUL.insertBefore(taskNode, taskListUL.firstChild)
}


// Document queries
const container = document.getElementById("container")
const infoButton = document.getElementById("container")
const addTaskButton = document.getElementById("addButton")
const addTaskBar = document.getElementById("addBar")
const taskListUL = document.getElementById("taskList")

// Set up initial states
function main() {

    const tasksCollection = taskListUL.children
    for (let i = 0; i < tasksCollection.length; ++i) {
        addListenersToTaskNode(tasksCollection[i])
    }

    // Add event listeners
    addTaskButton.addEventListener("click", function() {
        if (addTaskBar.style.display === "none") {
            addTaskBar.style.display = "block"
        } else {
            addTaskBar.style.display = "none"
        }
    })

    addTaskBar.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            let taskString = addTaskBar.value
            addTaskBar.value = ""
            addTask(taskString)
        }
    })
}

main()
