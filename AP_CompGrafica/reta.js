document.addEventListener('DOMContentLoaded', () => {
    let x1 = document.getElementById('x1').value;
    let y1 = document.getElementById('y1').value;
    let x2 = document.getElementById('x2').value;
    let y2 = document.getElementById('y2').value;

    // Exemplo de manipulação dos valores
    let resultado = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    console.log("Resultado:", resultado);
});
