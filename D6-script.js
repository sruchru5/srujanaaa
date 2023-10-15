function checkNumber() {
    var number = document.getElementById("numberInput").value;
    var resultElement = document.getElementById("result");

    if (number % 2 === 0) {
        resultElement.textContent = number + " is even.";
    } else {
        resultElement.textContent = number + " is odd.";
    }
}