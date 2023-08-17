const form = document.getElementById("paridade-form");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const numero = parseInt(document.getElementById("numero").value);
    if (isNaN(numero)) {
        resultado.innerText = "Por favor, digite um número válido.";
    } else {
        resultado.innerText = numero % 2 === 0 ? "O número é par." : "O número é ímpar.";
    }
});
