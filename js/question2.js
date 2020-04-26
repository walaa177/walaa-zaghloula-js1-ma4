const gamesUrl = "https://api.rawg.io/api/games";
async function createGames(){
    try{
        const response = await fetch(gamesUrl);
        const json = await response.json();
        displaygames(json);
    }catch(error){
        console.log(error);
    }
}
createGames();
function displaygames(json){
    let games = json.results;
    console.log(games);
    const gamesContiner = document.querySelector(".results");
    let html ="";
    for(let i = 0; i < games.length; i++){
        if(!games[i].name){
            continue;  
        }
        /* @TODO: there is no image property in the object, used background_image for now. */
        html += `<div >  
            <h2>${games[i].name}</h2>
            <img src="${games[i].background_image}" alt="${games[i].name}" />
            </div>`;    
    }
    gamesContiner.innerHTML = html;
}