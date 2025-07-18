function calculateResult() {
    let color = document.querySelector('input[name="color"]:checked')?.value;
    let personality = document.querySelector('input[name="personality"]:checked')?.value;
    let resultText = "You are ";

    if (color === "red" && personality === "brave") {
        resultText += "Peter Parker (Spider-Man)";
    } else if (color === "black" && personality === "intelligent") {
        resultText += "Miles Morales";
    } else if (color === "blue" && personality === "kind") {
        resultText += "Gwen Stacy (Spider-Gwen)";
    } else {
        resultText += "a unique Spider-Person!";
    }

    document.getElementById("result").textContent = resultText;
}