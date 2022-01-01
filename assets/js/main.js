//Capturar evento de submit do formulário
function meuescopo() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const peso = Number(e.target.querySelector('#peso').value);
        const altura = Number(e.target.querySelector('#altura').value);
        if (!peso) {
            setResultado('PESO INVÁLIDO', false);
            return;
        }

        if (!altura) {
            setResultado('ALTURA INVÁLIDA', false);
            return;
        }
        const imc = calculoIMC(peso, altura);
        setResultado(`Seu imc é ${imc} (${getNivel(imc)})`, true);
    });
    function getNivel(imc) {
        const nivel = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso',
            'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        if (imc >= 39.0) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

    function calculoIMC(peso, altura) {
        const imc = peso / (altura ** 2);
        return imc.toFixed(2);
    }

    function criaparagrafo() {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(mensagem, eValido) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = ``;
        const p = criaparagrafo();
        if (eValido) {
            p.classList.add('paragrafo-resultado')
        } else {
            p.classList.add('paragrafo-invalido')
        };
        p.innerHTML = mensagem;
        resultado.appendChild(p);
    }
}
meuescopo();


