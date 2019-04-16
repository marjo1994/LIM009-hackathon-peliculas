
const movies = document.getElementById('movies');
const apiKey = '789019a0';
const baseURL = 'http://www.omdbapi.com/?apikey='+apiKey;

const searchMovies = async(searchBy,page) => {
const url = baseURL +'&s='+ searchBy +'&page='+ page;
    const response = await fetch(url);
    const json = await response.json();
    const result = JSON.parse(JSON.stringify(json));
    return result.Search;    
    }

    const printData = data => {
        let string = '';
        for(let movie = 0; movie < data.length; movie++) {
        string += `<div>
        <p>Title:${movie.Title}</p>
        <img src="${movie.Poster}" alt="poster">
        </div>`
        }
        return movies.innerHTML = string;
}

    searchMovies('accion',1)
    .then(data => printData(data));

