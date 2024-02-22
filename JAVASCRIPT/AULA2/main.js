const displayed_image = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const botao = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const musicas = ['music1.png', `music2.png`, `music3.png`, `music4.png`, `music5.png`];

const album = {
  'music1.png' : 'Under Pressure - Queen, David Bowie',
  'music2.png' : 'Enter Sandman - Metallica',
  'music3.png' : 'Dont\'t Stop Me Now - Queen',
  'music4.png' : 'Breaking the Law',
  'music5.png' : 'Everlong - Foo Fighters'
}


for (const image of musicas) {
  const nova_imagem = document.createElement('img');
  nova_imagem.setAttribute('src', `images/${image}`);
  nova_imagem.setAttribute('alt', album[image]);
  thumbBar.appendChild(nova_imagem);
  nova_imagem.addEventListener('click', e => {
    displayed_image.src = e.target.src;
    displayed_image.alt = e.target.alt;
  });
}

botao.addEventListener('click', () => {
  const classe_botao = botao.getAttribute('class');
  if (classe_botao === 'dark') {
    botao.setAttribute('class','light');
    botao.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    botao.setAttribute('class','dark');
    botao.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});