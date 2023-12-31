document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("inputan");
  const buttons = document.querySelectorAll("button");
  let isPrevOperator = false;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = button.textContent;

      switch (buttonText) {
        case "AC":
          inputField.value = "";
          break;
        case "DEL":
          inputField.value = inputField.value.slice(0, -1);
          break;
        case "=":
          try {
            inputField.value = eval(inputField.value);
          } catch (error) {
            inputField.value = "Error";
          }
          break;
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
          if (isPrevOperator) {
            inputField.value = inputField.value.slice(0, -1);
          }
          isPrevOperator = true;
          inputField.value += buttonText;
          break;
        default:
          isPrevOperator = false;
          inputField.value += buttonText;
          break;
      }
    });
  });
});
