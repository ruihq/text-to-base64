const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encodeBtn = document.getElementById('encode-btn');

function encodeBase64() {
  const text = inputText.value;
  const encodedText = btoa(text);
  outputText.value = encodedText;
}

encodeBtn.addEventListener('click', encodeBase64);
