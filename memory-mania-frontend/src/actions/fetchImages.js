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