const InputBox = document.querySelectorAll("input");
const KelvinUnit = document.getElementById("kelvin");
const FahrenheitUnit = document.getElementById("fahrenheit");
const celsiusUnit = document.getElementById("celsius");
const RestButton = document.querySelector("button");

function TempHandler(event) {
    const SelectedUnit = event.target.id;

    switch (SelectedUnit) {
        case "kelvin":
            FahrenheitUnit.value = (KelvinUnit.value * 1.8 - 459.67).toFixed(2);
            celsiusUnit.value = (KelvinUnit.value - 273.15).toFixed(2);
            break;
        case "fahrenheit":
            KelvinUnit.value = ((FahrenheitUnit.value + 459.67) / 1.8).toFixed(
                2
            );
            celsiusUnit.value = (KelvinUnit.value - 273.15).toFixed(2);
            break;
        case "celsius":
            FahrenheitUnit.value = ((celsiusUnit.value * 9) / 5 + 32).toFixed(
                2
            );
            KelvinUnit.value = celsiusUnit.value + 273.15;
            break;
    }
}

InputBox.forEach((i) => i.addEventListener("change", TempHandler));
InputBox.forEach((i) => i.addEventListener("keyup", TempHandler));
RestButton.addEventListener("click", () => {
    InputBox.forEach((i) => (i.value = ""));
});
