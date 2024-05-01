const analisarPalavra = function (palavra) {
    const repeticoes = {};

    for (let letra of palavra) {
        if (repeticoes[letra] === undefined) {
            repeticoes[letra] = 1;
        } else {
            repeticoes[letra]++;
        }
    }
            
    calcularAnagrama(palavra.length, repeticoes);
}

const calcularAnagrama = function (n, k) {
    let total_fatoriais = 1;

    for (let ki in k) {
        total_fatoriais *= fatorial(k[ki]);
    }

    const resultado = fatorial(n) / total_fatoriais;

    exibirResultados(resultado, k);
}

const exibirResultados = function (resultado, repeticoes) {
    const output = document.querySelector('#results');

    let lista_repeticoes = '';

    for (let info in repeticoes) {
        lista_repeticoes += `<li><strong>${info}:</strong> ${repeticoes[info]}</li>`;
    }

    output.innerHTML = '';

    output.innerHTML = `
        <ul>
            <li> <strong>N° de Anagramas:</strong> ${resultado}</li> 
            <li> <strong>Letras:</strong>
                <ul style="margin-left: .8em"> 
                    ${lista_repeticoes}
                </ul>  
            </li>
        </ul>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.form-btn').addEventListener('click', function () {
        const palavra = String(anagrama.palavra.value).toLocaleUpperCase();

        if (!palavra) {
            document.querySelector('#results').innerHTML = '<p> Insira uma palavra no campo destacado. </p>';
            anagrama.palavra.focus();
        } else {
            analisarPalavra(palavra.split(''));
        }
    });
});

const fatorial = function (n) {
    if (n === 1) {
        return n;
    }
    return n * fatorial(n - 1);
}