async function translateText(text) {
    const response = await window.deepinTranslator.translate(text);
    return response;
}

async function replaceDescriptions() {
    const desc = document.querySelector('.description');
    if (!desc) return;

    const original = desc.innerText.trim();
    if (!original) return;

    // Detect Chinese characters
    if (/[\u4e00-\u9fff]/.test(original)) {
        const translated = await translateText(original);
        desc.innerText = translated;
    }
}

setInterval(replaceDescriptions, 1000);
