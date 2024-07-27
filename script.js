function encrypt() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText.replace(/e/g, "enter")
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/o/g, "ober")
                              .replace(/u/g, "ufat");
    document.getElementById("outputText").value = outputText;
}

function decrypt() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText.replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");
    document.getElementById("outputText").value = outputText;
}
