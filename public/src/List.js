export default function List(props) {

    let $list = null
    let $remove = null
    let $lable = null
    let $check = null

    const render = () => {
        $list = document.createElement('div')
        $remove = document.createElement('div')
        $lable = document.createElement('div')
        $check = document.createElement('div')

        $remove.addEventListener('click', onClickRemove)


        $list.className = 'todo-item'
        $remove.className = 'remove'
        $lable.className = 'todo-text' //"checked"
        $check.className = 'check-mark'

        $remove.append('X')
        $lable.append(props.todo.title)
        // $check.append(props.todo.completed ? '✓' : '' ? checked:'')
        props.todo.completed && $check.append('✓') && $lable.append(checked)

        $list.append($remove, $lable, $check)

        return $list
    }
    const onClickRemove=()=>{
        props.onClickRemove(props.todo.id)
    }
    // const onClickCheck=()=>{
    //     props.onClickCheck(props.todo.completed)
    // }

    return render()
}