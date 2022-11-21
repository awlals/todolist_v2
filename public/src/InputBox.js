export default function InputBox(props) {

    const state = {
        value : ""
    }

    let $inputBox = null
    let $input = null
    let $addButton = null

    function render() {
        $inputBox = document.createElement('section')
        $inputBox.id = "inputBox"
        $input = document.createElement('input')
        $addButton = document.createElement('div')
        $addButton.className = 'create-button'
        
        bindEvent()
        $addButton.append("+")
        $inputBox.append($input, $addButton)


        return $inputBox
    }

    const onChangeInput = (event) => {
        state.value = event.target.value
        $input.value = event.target.value
    }
    const onClickAddButton = () =>{

    }
    const bindEvent = () => {
        $input.addEventListener('input', onChangeInput)
        $addButton.addEventListener('click', onClickAddButton)
    }
    

    return render()
}