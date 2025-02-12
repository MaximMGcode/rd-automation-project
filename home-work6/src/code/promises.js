
function makeRequest(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Http error, status: ${response.status}`);
            } else {
                return response.json();
            }
        }).then((jsonData) => {
            return jsonData;
        });
}


function showResponseInfoToConsole(jsonData) {
    console.log(jsonData);
}


// Url
const requestUrl = 'https://pokeapi.co/api/v2/pokemon/squirtle';
// Call function
makeRequest(requestUrl)
    .then(showResponseInfoToConsole);
