document.getElementById("convertBtn").addEventListener("click", function () {

    const inputValue = document.getElementById("temperatureInput").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultDiv = document.getElementById("result");

    // Validate input
    if (inputValue === "" || isNaN(inputValue)) {
        resultDiv.innerText = "❌ Please enter a valid number!";
        return;
    }

    let temp = Number(inputValue);
    let convertedTemp;

    // Step 1: Convert input → Celsius
    if (fromUnit === "F") {
        temp = (temp - 32) * 5 / 9;
    } else if (fromUnit === "K") {
        temp = temp - 273.15;
    }

    // Step 2: Convert Celsius → Target Unit
    if (toUnit === "C") {
        convertedTemp = temp;
    } else if (toUnit === "F") {
        convertedTemp = (temp * 9 / 5) + 32;
    } else if (toUnit === "K") {
        convertedTemp = temp + 273.15;
    }

    const unit = toUnit === "K" ? "K" : "°" + toUnit;

    resultDiv.innerText =
        `✅ Converted Temperature: ${convertedTemp.toFixed(2)} ${unit}`;
});