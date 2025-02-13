
function showResponseInfoToConsole(jsonData) {
    console.log(jsonData);
}

function makeRequest(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Http error, status: ${response.status}`);
            } else {
                return response.json();
            }
        }).then((jsonData) => {
            showResponseInfoToConsole(jsonData);
        });
}


// Url
const requestUrl = 'https://pokeapi.co/api/v2/pokemon/squirtle';
// Call function
makeRequest(requestUrl)
    .then(() => console.log('Request completed'))
    .catch(error => console.error("Error:", error));
