
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const inputnumero = e.target.querySelector('#numero');
  
  const numero = Number(inputnumero.value);

  if (!numero) {
    setResultado('Numero inválido', false);
    return;
  }

  
  const divisor = getdivisor(numero);
  
  const msg = "Numero de divisores é: " + divisor ;

  setResultado(msg, true);
});


function getdivisor (numero) {
  let i, divisor;

    divisor = 0;

    for (i = 1; i <= numero; i++)
    {
	    if (numero%i==0)
        {
            divisor = divisor + 1;
        }
    }

    return divisor;
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
