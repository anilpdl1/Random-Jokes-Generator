let radioButtons=document.querySelectorAll('input[name="category"]');
let submit=document.getElementById('btn');
radioButtons.forEach(radio=>{
    radio.addEventListener('click',(e)=>{
    })
});
async function  getJokes(str){
    let jokes=await fetch(`https://v2.jokeapi.dev/joke/${str}`);
    let response=await jokes.json();
    console.log(response)
    return response;
}
submit.addEventListener('click',async (e)=>{
    
    let jokeList=document.querySelector('ol');
    let selectedRadio=document.querySelector('input[name="category"]:checked');
    let thisJoke=await getJokes(selectedRadio.value);
    if(thisJoke.type=='twopart'){
    jokeList.innerHTML+=`<li>${thisJoke.setup}<br>${thisJoke.delivery}</li>`;
    }
    if(thisJoke.type=='single'){
        jokeList.innerHTML+=`<li>${thisJoke.joke}</li>`;
    }
 });    

