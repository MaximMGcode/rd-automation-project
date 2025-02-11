
function makeRequest(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Http error, status: ${response.status}`);
            } else {
                return response.json();
            }
        });
}


function showResponseInfoToConsole() {
    makeRequest('https://pokeapi.co/api/v2/pokemon/squirtle').then((jsonData) => {
        console.log(jsonData);
    });
}


// Success resp
showResponseInfoToConsole();
