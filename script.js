const sublinhar = document.querySelector('.sublinhar');
const italico = document.querySelector('.italico');
const negrito = document.querySelector('.negrito');
const subtrair = document.querySelector('.subtrair');
const adicao = document.querySelector('.adicao');
const tamanho = document.querySelector('.tamanho');
const vermelho = document.querySelector('.vermelho');
const azul = document.querySelector('.azul');
const roxo = document.querySelector('.roxo');
const preto = document.querySelector('.preto');
const texto = document.querySelector('.texto');

sublinhar.onclick = () => {
    if (!texto.style.textDecoration || texto.style.textDecoration === 'none') {
        texto.style.textDecoration = 'underline';
        return
    }
    texto.style.textDecoration = 'none';
}

italico.onclick = () => {
    if (!texto.style.fontStyle || texto.style.fontStyle === 'normal') {
        texto.style.fontStyle = 'italic';
        return
    }
    texto.style.fontStyle = 'normal';
}

negrito.onclick = () => {
    if (!texto.style.fontWeight || texto.style.fontWeight === 'normal') {
        texto.style.fontWeight = 'bold';
        return
    }
    texto.style.fontWeight = 'normal';
}

let tamanhos = 16;

const fontTamanho = () => {
    if (tamanhos === 12) {
    } else {
        texto.style.fontSize = `${tamanhos -= 2}px`
        tamanho.textContent = `${tamanhos}`
    }
}

subtrair.onclick = fontTamanho;

adicao.onclick = () => {
    texto.style.fontSize = `${tamanhos += 2}px`
    tamanho.innerHTML = `${tamanhos}`
}

vermelho.onclick = () => {
    texto.style.color = 'red';
}
azul.onclick = () => {
    texto.style.color = 'blue';
}
roxo.onclick = () => {
    texto.style.color = 'purple';
}
preto.onclick = () => {
    texto.style.color = 'black';
};