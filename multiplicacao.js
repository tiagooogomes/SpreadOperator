const vetorParaMultiplicar = [23, 12, 20, 21];
const vetorParaConcatenar1 = [true, 'Tiago', 23, 'Animação'];
const vetorParaConcatenar2 = ['Santos', false, 20, '😉'];
const vetorParaArmazenar = [];

function multiplicacao(a, b, c, d) {
     const resultado = a * b * c * d;
     console.log('O resultado da multiplicação é ', resultado);
     return resultado;
};

function concatenar(x, y) {
    const novoVetor = [...x, ...y];
    console.log(novoVetor);
    return novoVetor;
};

function sorteio() {
    for(let i = 0; i < 10; i++) {
        const numeroSorteado = Math.floor(100 * Math.random() + 1);
        vetorParaArmazenar.push(numeroSorteado);
    };

    const MaiorValor = Math.max(...vetorParaArmazenar);
    console.log(vetorParaArmazenar);
    console.log('O maior número sorteado foi', MaiorValor);
};

multiplicacao(...vetorParaMultiplicar);
concatenar(vetorParaConcatenar1, vetorParaConcatenar2);
sorteio();
