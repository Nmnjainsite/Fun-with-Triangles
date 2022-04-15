const areaInput1 = document.querySelector("#area-input1")
const areaInput2 = document.querySelector("#area-input2")
const areaInput3 = document.querySelector("#area-input3")
const inputBtn = document.querySelector("#input-btn");
const output = document.querySelector("#output");


function calculateArea(e){
    e.preventDefault();

    const areaInput1Value = Number(areaInput1.value);
    const areaInput2Value = Number(areaInput2.value);
    const areaInput3Value = Number (areaInput3.value)

    if (
        areaInput1Value + areaInput2Value > areaInput3Value &&
        areaInput2Value + areaInput3Value > areaInput1Value &&
        areaInput1Value + areaInput3Value > areaInput2Value
    ) {
        const semiPerimeter = (areaInput1Value + areaInput2Value + areaInput3Value) / 2;

        const result = Math.sqrt (
            semiPerimeter * 
            (semiPerimeter - areaInput1Value)*
            (semiPerimeter - areaInput2Value)*
            (semiPerimeter - areaInput3Value)
        ).toFixed(4);
        output.innerText = `Area of a triangle using heron's formula is ${result} units` ; 
    } else{
        output.innerText = "Don't Timepass here"
    }
}






inputBtn. addEventListener("click", calculateArea);
