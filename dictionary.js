document.getElementById("dictionaryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const word = document.getElementById("dictionaryInput").value.trim();
    if (word !== "") {
        fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9399795867msha74f1e6ec8a12edp18aa53jsn30069da829a3',
                'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.definition) {
                document.getElementById("dictionaryOutput").value = data.definition;
            } else {
                document.getElementById("dictionaryOutput").value = "No definition found for the word.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("dictionaryOutput").value = "Error fetching definition. Please try again later.";
        });
    } else {
        document.getElementById("dictionaryOutput").value = "Please enter a word to search.";
    }
});


