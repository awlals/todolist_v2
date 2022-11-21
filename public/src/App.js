import InputBox from "./Inputbox.js"
import ListBox from "./ListBox.js"
import Title from "./Title.js"

export default function App($target) {

    let $main = null
    let $title = null
    let $inputBox = null
    let $ListBox = null

    let state = {
        inputValue : "",
        todoList:[]
    }

    const getTodoList = async () => {
        // https://jsonplaceholder.typicode.com/todos
       const api = await fetch('https://jsonplaceholder.typicode.com/todos')
       const data = await api.json()
       setTodoList(data.filter((e, index) => index < 10))
    }

    const handleClickRemove = (id) =>{
        const newTodoList = state.todoList.filter(e => e.id !== id)
        setTodoList(newTodoList)
    }

    const setTodoList = (todoList) => {
        state = {...state, todoList}
        render()
    }

    const render = () => {
        
        const preMain = document.getElementsByClassName('main')[0]
        $main = document.createElement("div")

        $title = new Title()
        $inputBox = new InputBox()
        $ListBox = new ListBox({
            todoList: state.todoList,
            onClickRemove: handleClickRemove,
            // onClickCheck: handelClickCheck
        })

        $main.className = "main"

        $main.append($title)
        $main.append($inputBox)
        $main.append($ListBox)

        if(preMain) {
            preMain.replaceWith($main)
        } else{
            $target.append($main)
        }
        
    }

    const createMainDom = () => {
        $main = document.createElement("div")
    }
    const init = () => {
        createMainDom()
        getTodoList()
    }

    init()
    
}