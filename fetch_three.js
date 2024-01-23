
/*
fetch("https://pokeapi.co/api/v2/pokemon/mewtwo")
    .then(response => {
        if (!response.ok) {
            throw new Error("Couldn't fetch")
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

/*
async function fetchData() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/mewtwo");
    if (!response.ok) {
        throw new Error("Couldn't fetch");
    }

    const data = await response.json();
    console.log(data);

    } catch (error) {
        console.error(error);
    }
}

fetchData();
*/


async function fetchData() {
    try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    if (pokemonName.value.length < 0) {
        window.alert("Digite um nome");
       }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    console.log(response);
    const data = await response.json();
   
   
    
    console.log(data);

    if (!response.ok) {
        throw new Error("Couldn't fetch"); 
        
        
    }

  


   

    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    const nameH1 = document.getElementById("name");

    nameH1.textContent = data.name;
    const weight = document.getElementById("weight");
    weight.textContent = data.weight;
    const height = document.getElementById("height");
    height.textContent = data.height;
    

    const label_one = document.getElementById("label_one");
    label_one.style.display = "block"
    const label_two = document.getElementById("label_two");
    label_two.style.display = "block"

    } catch (error) {
        console.log(error);
    }

    pokemonName.value = "";


}

const nameH1 = document.getElementById("name");
const pokemonName = document.getElementById("pokemonName");
pokemonName.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        fetchData();

}

})



