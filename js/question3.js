const url = "https://api.rawg.io/api/games/4200";
async function createGameDetails(){
     const heading = document.querySelector("h1");
    try{
        const response = await fetch(url);
        const details = await response.json();
        heading.innerHTML = details.name
        const image = document.querySelector(".image");
        image.style.backgroundImage = "url(" + details.background_image + ")";
        const description = document.querySelector(".description");
        description.innerHTML = details.description;
    } catch (error) {
        console.log(error);
    }
}
createGameDetails();