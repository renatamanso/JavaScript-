// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const inputfibonacci = e.target.querySelector('#fibonacci');
  
  const termo = Number(inputfibonacci.value);

  if (!termo) {
    setResultado('Termo inválido', false);
    return;
  }

  const fibonacci = getfibonacci(termo);
  
  const msg = "O valor do termo indicado é: " + fibonacci ;

  setResultado(msg, true);
});


function getfibonacci (termo) {
  let i, A, B, C;

	A = 0;
	B = 1;

    for(i=3; i<=termo; i++)
    {
	
    C = A + B;
	
    A = B;
    B = C;

    }
    if(termo == 1){
       return 0;
    } else if(termo == 2) {
        return 1;
    } else if(termo >= 3) {
          return C;
    }

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
