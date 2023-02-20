const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const decodeBtn = document.getElementById('decode-btn');

function decodeBase64() {
  const encodedText = inputText.value;
  const text = atob(encodedText);
  outputText.value = text;
}

decodeBtn.addEventListener('click', decodeBase64);
