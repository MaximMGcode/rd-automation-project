
async function makeRequest(url) {
    const incorrectUrl = `${url}/unknown_address`;
    const correctUrl = `${url}/`;

    try {
        const response = await fetch(incorrectUrl);
        if (!response.ok) {
            const response = await fetch(correctUrl);
            return await response.json();
        }
    } catch {
        throw new Error('TypeError: Failed to fetch');
    }
}


async function showResponseInfoToConsole() {
    console.log(
        await makeRequest('https://pokeapi.co/api/v2/pokemon/squirtle')
    );
}


// Show response
(async () => {
    await showResponseInfoToConsole();
})();
