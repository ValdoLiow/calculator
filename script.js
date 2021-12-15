//SETUP - mengatur agar tombol2 angka dapat diklik dan muncul di screen
const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}

//DEF - mendefinisikan fungsi input (prevNum - operator - currentNum)
let prevNumber = ""
let calculationOperator = ""
let currentNumber = ""


//TOMBOL NUMBER
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    console.log(number)
})

//FUNCTION - meng-input lebih dari 1 angka (terkait apa yg akan muncul di screen)
const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

//RUN - menjalankan fungsi inputNum
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


//TOMBOL OPERATOR
const operators = document.querySelectorAll(".operator")

//FUNCTION - mendefinisikan fungsi input
const inputOperator = (operator) => {
    if(calculationOperator === " ") {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = "0"
}

//RUN
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})


//TOMBOL "="
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener ("click", () => {
    calculate()
    updateScreen(currentNumber)
})


//DEF CALCULATION
const calculate = () => {
    let result = " "
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = " "
}


//TOMBOL AC
const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener ("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

//FUNCTION
const clearAll = () => {
    prevNumber = " "
    calculationOperator = " "
    currentNumber = "0"
}

//FUNCTION - input decimal
inputDecimal = (dot) => {
    if(currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
}

//DECIMAL
const decimal = document.querySelector(".decimal")

decimal.addEventListener ("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})