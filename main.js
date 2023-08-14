let data = [];
var links = [...document.querySelectorAll(".nav-link")];
/*
for(let i=0; i<links.length; i++)
{
    links[i].addEventListener('click',function(e){
    //    console.log(e.target.innerHTML) 
    getdata(e.target.innerHTML)

    }) 
}
*/
// or you can do...
links.forEach((link) => {
  link.addEventListener("click", ({ target }) => {
    // first we need to fetch data with related category
    getData(target.innerHTML?.trim());
    // second, we need to remove active class from all links and add it to the current category link
    // to remove active class from all
    links.forEach(link => {link.classList.remove("active")})
    // to add active class to current category
    link.classList.add('active')
  });
});

async function getData(type) {
    try {
        let request = await fetch(
            `https://forkify-api.herokuapp.com/api/search?q=${type}`
        );
        let response = await request.json();
        data = response.recipes;
    } catch (err)
    {
        throw new Error("Error: ", err.message)
    } 
    displayData();
}

getData("pizza");

function displayData() {
    let content = " ";
    for (let i = 0; i < data.length; i++) {
        content += `

                <div class="card my-3 py-2">
                    <h2>${data[i].title} </h2>
                    <p>${data[i].publisher} </p>
                    <img class="w-100 img-fluid" src="${data[i].image_url} " alt=""> 
                </div>        
            `;
    }
    document.getElementById("content").innerHTML = content;
}
