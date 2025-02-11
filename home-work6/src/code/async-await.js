

async function makeRequest(requestUrl) {
    const response = await fetch(requestUrl);

    if (!response.ok) {
        throw new Error(`Http error, status: ${response.status}`);
    } else {
        return await response.json();
    }
}


async function showResponseInfoToConsole() {
    console.log(
        await makeRequest('https://pokeapi.co/api/v2/pokemon/squirtle')
    );
}


// Success resp
showResponseInfoToConsole();
