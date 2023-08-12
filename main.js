

let data = [] ;
var links = document.querySelectorAll('.nav-link');

for(let i=0; i<links.length; i++)
{
    links[i].addEventListener('click',function(e){
    //    console.log(e.target.innerHTML) 
    getdata(e.target.innerHTML)

    }) 
}
async function getdata (type){
    
    let request = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${type}`);
    let response = await request.json();
    data = response.recipes;
    // console.log(response)
    console.log(data)

    displaydata()
}

getdata('pizza')


function displaydata(){
    let content = " ";
    for(let i=0;i<data.length;i++){
        content += `

        <div class="col-md-4 my-3">
             <div class="card p-2">
                  <h2>${data[i].title} </h2>
                  <p>${data[i].publisher} </p>
                  <img class="w-100" src="${data[i].image_url} " alt=""> 
             </div>
        </div>
        
        `
    }
    document.getElementById("content").innerHTML = content
}
