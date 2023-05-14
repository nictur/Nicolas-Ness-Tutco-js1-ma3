const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=0d74a15dd8ad4d3e98f91bfd7cdadc12";

async function getGames() {

    const response = await fetch(url);

    const results = response.json();

    console.log(results);

}

getGames()