function girarFoto(elemento) {
    elemento.classList.toggle('girar');
}

const body = document.body;
const button = document.getElementById('button');

let fundoAtivo = 1;

button.addEventListener('click', () => {
  if (fundoAtivo === 1) {
    body.style.backgroundImage = "url('/images/fud2.png')";
    fundoAtivo = 2;
  } else if (fundoAtivo === 2){
    body.style.backgroundImage = "url('/images/fud3.png')";
    fundoAtivo = 3;
  } else if (fundoAtivo === 3){
    body.style.backgroundImage = "url('/images/fud1.png')";
    fundoAtivo = 4;
  } else if (fundoAtivo === 4){
    body.style.backgroundImage = "url('/images/Aranha.png')";
    fundoAtivo = 5;
  } else if (fundoAtivo === 5){
    body.style.backgroundImage = "url('/images/ErroPage.png')";
    fundoAtivo = 6;
  } else {
    body.style.backgroundImage = "url('/images/Fud.png')";
    fundoAtivo = 1;
  }
});