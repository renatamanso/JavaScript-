const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputfatorial = e.target.querySelector('#fatorial');
  
  const numero = Number(inputfatorial.value);

  if (!numero) {
    setResultado('Numero inválido', false);
    return;
  }

  const fatorial = getfatorial(numero);
  
  const msg = "O fatorial do numero é : " + fatorial ;

  setResultado(msg, true);
});


function getfatorial (numero) {
  let fatorial;
	let controle;

	fatorial = 1;

    for(controle=2;controle<=numero; controle++)
    {

	    fatorial = fatorial*controle;

    }

    return fatorial;     
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
