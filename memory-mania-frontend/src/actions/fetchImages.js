const shuffleAndSlice = (array) => {
  let shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 12);
}

export function fetchImages(searchTerm) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_IMAGES_REQUEST' });
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(result => dispatch({ type: 'ADD_IMAGES', imageUrls: shuffleAndSlice(result.data) }));
  };
}

export function fetchMovies() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_IMAGES_REQUEST' });
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=25852bf3ec862301a40806da734a2d12`)
      .then(response => response.json())
      .then(result => dispatch({ type: 'ADD_MOVIE_IMAGES', imageUrls: shuffleAndSlice(result.results.map(image => image.backdrop_path)) }));
  };
}

export function fetchNyt() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_IMAGES_REQUEST' });
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ZalFqAIVOVxA5sVvGtlA5Sz6sRBOHD4I`)
      .then(response => response.json())
      //.then(result => console.log(result.results.map(result => result.multimedia[0])))
      .then(result => dispatch({ type: 'ADD_NYT_IMAGES', imageUrls: shuffleAndSlice(result.results.map(result => result.multimedia[0])) }));
  };
}