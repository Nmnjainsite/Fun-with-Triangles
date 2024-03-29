const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
  } else {
    output.innerText = "Invalid Entry";
  }
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    output.innerText = "You did it,correct answer✅";
  } else {
    output.innerText = "try again ⌛";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
