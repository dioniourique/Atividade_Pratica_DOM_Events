/* Desenvolva aqui a rotina */


let input = document.querySelectorAll('input');

function calcularSoma() {
    let valorBase = parseFloat(document.getElementById('valor_base').value) || 0;
    let ajudaTransporte = parseFloat(document.getElementById('valor_transporte').value) || 0;
    let ajudaAlimentacao = parseFloat(document.getElementById('valor_alimentacao').value) || 0;
    let descontoAutomovel = parseFloat(document.getElementById('valor_automovel').value) || 0;
    let faltas = parseFloat(document.getElementById('faltas').value) || 0;

    let receitaTotal = valorBase + ajudaTransporte + ajudaAlimentacao;
    document.getElementById('valor_receita').value = receitaTotal;

    let descontosTotal = descontoAutomovel + faltas;
    document.getElementById('valor_descontos').value = descontosTotal;

    let total =receitaTotal - descontosTotal;
    document.getElementById('valor_total').value = total;
}

document.getElementById('btn_calcular').addEventListener('click', calcularSoma);
