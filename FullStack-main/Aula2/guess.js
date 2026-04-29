var numero2 = Math.floor(Math.random() * 100);

function verificarPalpite() {
    var numero1 = parseInt(document.getElementById("numero1").value);

    if (isNaN(numero1)) {
        alert("Por favor, digite um número válido!");
        return;
    }

    if (numero1 == numero2) {
        document.getElementById("mensagem").textContent = "Parabéns! Você acertou!";
        document.getElementById("bodinho").style.setProperty("background-color", "green");
    } else if (numero1 < numero2) {
        document.getElementById("mensagem").textContent = "Tente um número maior!";
        document.getElementById("bodinho").style.setProperty("background-color", "red");
    } else {
        document.getElementById("mensagem").textContent = "Tente um número menor!";
        document.getElementById("bodinho").style.setProperty("background-color", "red");
    }
}