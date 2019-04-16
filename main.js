//ALMACENAMOS LAS SECCIONES EN CONSTANTES //
const welcomePage=document.getElementById("welcome-page");
const startButton= document.getElementById("start-button");
const secondPage=document.getElementById("second-page");
const paragraph=document.getElementById("paragraph");
const select=document.getElementById("select");
const footer =document.getElementById("footer");

startButton.style.display="block";
welcomePage.style.display="block"
select.style.display="none";
paragraph.style.display="none";
footer.style.display="block";

startButton.addEventListener("click",()=>{
  startButton.style.display="none";
  welcomePage.style.display="none";
  select.style.display="block";
  paragraph.style.display="block";
  footer.style.display="block";
});


/*
const apiKey = '789019a0'; // almacenando clave para obtener la data de la web OMDb API

const baseURL = 'http://www.omdbapi.com/?apikey='+apiKey;
// almacenando en una constante la base de la URL mas la key para poder acceder al JSON

const searchMovies = async (searchBy,page) => {//creando una función para obtener las peliculas por titulo

const url = baseURL + '&s='+searchBy+'&p='+page; //agregando parametros a la url

  const response = await fetch(url); //obteniendo la data json de forma asíncrona

  const json = await response.json();// convirtiendo la data a json, recien aca lo trato como json

  console.log(json);
}

searchMovies("acción",2);

searchMovies("ficción",15);*/
