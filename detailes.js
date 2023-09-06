let queryString = window.location.search; // we use this statment " window.location.search  " to get info about the page the search method given the params such as id
let params = new URLSearchParams(queryString); // we make a new params object 
// console.log(params);
let id = params.get('id'); // the params have many method like get that given us what we need such as id whitout any more thing (=,? ..)
console.log(id); // now we have the id of the page we want to display more info about food 

let ingredients=[]


let data = {};
getDetails(id)
 async function getDetails(id)
{
    let request = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    let response = await request.json();
    data = response.recipe
    ingredients=response.recipe.ingredients
    // console.log(data);
    displaydata()
    displayIngredients()
}


function displaydata(){

document.getElementById('content').innerHTML=`
<div class="row">
    <div class="col-md-7">
        <h2>${data.title}</h2>
        <img class="w-100" src="${data.image_url}">
    </div>
    <div class="col-md-5">
        <h3>${data.publisher}</h3>
        <p>Recipe ingredients</p>
        <div id="ingredients"></div>
        <a class="btn btn-info" href="${data.publisher_url}" >publisher url</a>
    </div>
</div>
`

}



function displayIngredients(){
    console.log(ingredients)
    for(let i=0; i<ingredients.length; i++){
        let ele = document.createElement('p')
        ele.innerHTML = ingredients[i]
        document.getElementById('ingredients').append(ele)


    }


}