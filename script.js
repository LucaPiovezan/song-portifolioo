const toggleBtn = document.getElementById("toggle-mode");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️ Modo Claro";
    } else {
      toggleBtn.textContent = "🌙 Modo Escuro";
    }
  });

  const arrow = document.querySelector('.scroll-down');
let direction = 1;
let position = 0;

function animateArrow() {
  position += direction * 1;
  if (position > 20) direction = -1;
  if (position < 0) direction = 1;  
  arrow.style.transform = `translateX(-50%) translateY(${-position}px)`;
  requestAnimationFrame(animateArrow);
}
 
  const texto = document.getElementById('tipo-texto');
const palavras = ["Desenvolvedor Junior", "Desenvolvedor Web", "Programador Front-end", "Designer Digital"];
let i = 0;
let j = 0;
let deletando = false;

function digitar() {
  const palavra = palavras[i];

  if (!deletando && j <= palavra.length) {
    texto.textContent = palavra.substring(0, j);
    j++;
    setTimeout(digitar, 150);
  } else if (deletando && j >= 0) {
    texto.textContent = palavra.substring(0, j);
    j--;
    setTimeout(digitar, 50);
  } else {
    deletando = !deletando;
    if (!deletando) i = (i + 1) % palavras.length;
    setTimeout(digitar, 1000);
  }
}

document.querySelector('.c').addEventListener('click', () => {
  document.getElementById('modal-c').style.display = 'flex';
});
document.querySelector('.davinci').addEventListener('click', () => {
  document.getElementById('modal-davinci').style.display = 'flex';
});
document.querySelector('.excel').addEventListener('click', () => {
  document.getElementById('modal-excel').style.display = 'flex';
});


document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', e => {
    const modalId = e.target.getAttribute('data-close');
    document.getElementById(modalId).style.display = 'none';
  });
});


window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

  const btnTopo = document.getElementById("btnTopo");

  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  };

  btnTopo.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', () => {
  let valor = telefoneInput.value;

 
  valor = valor.replace(/\D/g, '');

 
  if (valor.length > 0) valor = '(' + valor;
  if (valor.length > 3) valor = valor.slice(0, 3) + ') ' + valor.slice(3);
  if (valor.length > 10) valor = valor.slice(0, 10) + '-' + valor.slice(10, 14);

  telefoneInput.value = valor;
});
const musicTracks = [
  {
    src: '',
    bgColor: '#4b82c3',
    image: 'gato.png'
  },
  {
    src: 'Here With Me.mp3',
    bgColor: '#8B0000',
    image: 'herewithme.png'
  },
  {
    src: 'celeste.mp3',
    bgColor: '#7B3F00',
    image: 'celeste.png'
  },
  {
    src: 'miaesebastian.mp3',
    bgColor: '#4045a7ff',
    image: 'miaesebastian.png'
  },
  {
    src: 'yebba.mp3',
    bgColor: '#dfd9dbff',
    image: 'yebba.png'
  },
  {
    src: 'takecare.mp3',
    bgColor: '#c9bdc2d5',
    image: 'takecare.png'
  },
  {
    src: 'mylove.mp3',
    bgColor: '#999496ff',
    image: 'mylove.png'
  },
  {
    src: 'congratulations.mp3',
    bgColor: '#be7e99d5',
    image: 'congratulations.png'
  },
  {
    src: 'yabadubadu.mp3',
    bgColor: '#c9bdc2d5',
    image: 'yabadubadu.png'
  }
 
];

let currentTrack = 0;
const audioElement = new Audio(musicTracks[currentTrack].src);
audioElement.loop = true;

const heroImage = document.getElementById('img1');
const playPauseBtn = document.getElementById('play-pause');

// Atualiza música, imagem e fundo
function updateVisuals() {
  const track = musicTracks[currentTrack];
  document.body.style.backgroundColor = track.bgColor;
  document.getElementById('cabeca').style.backgroundColor = track.bgColor;

  heroImage.style.backgroundImage = `url(${track.image})`;
  heroImage.style.backgroundSize = 'cover';
  heroImage.style.backgroundPosition = 'center';
  heroImage.style.width = '300px';
  heroImage.style.height = '300px';
  heroImage.style.borderRadius = '10px';
  heroImage.style.transition = '0.5s';
}

// Muda faixa
function changeTrack(direction) {
  currentTrack += direction;
  if (currentTrack < 0) currentTrack = musicTracks.length - 1;
  if (currentTrack >= musicTracks.length) currentTrack = 0;

  audioElement.src = musicTracks[currentTrack].src;
  audioElement.play();
  playPauseBtn.textContent = "⏸️"; // mostra que está tocando
  updateVisuals();
}

// Pausa ou reproduz a música
playPauseBtn.addEventListener('click', () => {
  if (audioElement.paused) {
    audioElement.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    audioElement.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// Eventos das setas
document.getElementById('next-track').addEventListener('click', () => changeTrack(1));
document.getElementById('prev-track').addEventListener('click', () => changeTrack(-1));

// Inicia com a música 1
audioElement.play();
updateVisuals();

document.getElementById("closeHint").addEventListener("click", () => {
  const hint = document.getElementById("audioHint");
  hint.style.opacity = "0";
  setTimeout(() => hint.style.display = "none", 300);
});



digitar();
animateArrow();