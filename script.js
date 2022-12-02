const SYNTAX_ERROR = 'SyntaxError'

const outputScreen = document.getElementById('outputScreen')

function display(event) {
    if(outputScreen.value === SYNTAX_ERROR) Clear()
    outputScreen.value += event.target.textContent
}

function Calculate () {
    try {
        outputScreen.value = eval(outputScreen.value)
        // string split by multiple alternatives
        // str.split(\[+-/%*]\)
    }

    catch(err) {
        outputScreen.value = SYNTAX_ERROR
        
    }
}

function Clear() {
    outputScreen.value = ""
}
function Del(){
    if(outputScreen.value === SYNTAX_ERROR) Clear()
    outputScreen.value = outputScreen.value.slice(0, -1)
}
    
