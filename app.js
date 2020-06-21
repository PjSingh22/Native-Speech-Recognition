window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const words = document.querySelector('.words');

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcript;

  e.results[0].isFinal ? p = document.createElement('p') : '';

  words.appendChild(p);
  transcript.includes('chicken') ? console.log('cluck cluck') : '';
});

recognition.addEventListener('end', recognition.start);

recognition.start();