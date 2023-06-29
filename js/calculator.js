let keys = document.getElementsByClassName("keys");

for(let key of keys){
    key.addEventListener("click", function(){
        let p = key.querySelector("p");
        let symbol = p.textContent;
        addToInput(symbol);
    });
}
const operators = ["/", "-", "+", "."];

const addToInput = (symbol) => {
    let input = document.getElementById("input");
    if(!isNaN(symbol) || operators.includes(symbol)){
        input.value += symbol;
    } else if(symbol === "DEL"){
        input.value = "";
        document.getElementById("result").querySelector("p").textContent = ""
    } else if (symbol === "X"){
        input.value += "*";
    }else if(symbol === "="){
        calculate();
    } 
}

const calculate = () => {
    let input = document.getElementById("input");
    let resultOutput = document.getElementById("result")
    //Si eval da algun error, muestra Syntax Error
    try {
        let result = eval(input.value);
        resultOutput.querySelector("p").textContent = result;
    } catch(error){
        resultOutput.querySelector("p").textContent = "Syntax Error";
    }
    
}