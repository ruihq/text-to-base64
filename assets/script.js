    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encodeBtn = document.getElementById('encode-btn');
    const decodeBtn = document.getElementById('decode-btn');

    function encodeBase64() {
      const text = inputText.value;
      const encodedText = btoa(text);
      outputText.value = encodedText;
    }

    function decodeBase64() {
      const encodedText = inputText.value;
      const text = atob(encodedText);
      outputText.value = text;
    }

    encodeBtn.addEventListener('click', encodeBase64);
    decodeBtn.addEventListener('click', decodeBase64);
