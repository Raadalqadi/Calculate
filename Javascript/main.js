let result = document.querySelector("#result");
const numbers = document.querySelectorAll("main .numbers input");
const equal = document.getElementById("c");

numbers.forEach((num) => {

    num.addEventListener("click", () => {
        switch(num.value){
            case "AC" : result.value = "";break;
            case "DE" : result.value = result.value.slice(0,-1);break;
            default : result.value += num.value;
        }
        
        num.classList.add("change");
        setTimeout(()=>{
            num.classList.remove("change");
        },150)

    });
});
equal.addEventListener("click", () => {
    result.value = eval(result.value);
});