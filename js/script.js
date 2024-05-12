const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["←", "/", "*", "-", "+", "=", "%"];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "C") {
        output = "";
    } else if (btnValue === "←") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) {
            return;
        }
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

// Add event listener for keyboard events
document.addEventListener("keydown", (e) => {
    const key = e.key;
    const button = Array.from(buttons).find((btn) => btn.dataset.value === key);
    if (button) {
        button.click(); 
    }
});

 alert("Only numbers are allowed")

