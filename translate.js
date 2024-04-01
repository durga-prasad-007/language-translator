document.getElementById("translationForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputText = e.target.querySelector("#textInput").value;
    const fromLang = e.target.querySelector("#fromLanguage").value;
    const toLang = e.target.querySelector("#toLanguage").value;

    const apiKey = '9399795867msha74f1e6ec8a12edp18aa53jsn30069da829a3';
    const endpoint = `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${toLang}&api-version=3.0&profanityAction=NoAction&textType=plain`;

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: JSON.stringify([{ Text: inputText }])
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').value =  data[0].translations[0].text;
    })
    .catch(error => console.error('Error:', error));
});
