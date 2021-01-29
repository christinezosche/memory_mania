export function fetchImages() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_IMAGES_REQUEST' });
    fetch('https://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(result => dispatch({ type: 'ADD_IMAGES', imageUrls: result.data.slice(0,12) }));
  };
}