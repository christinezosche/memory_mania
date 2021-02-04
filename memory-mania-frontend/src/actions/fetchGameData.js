export function fetchGameTemplatesData() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_GAME_TEMPLATES_DATA_REQUEST' });
      fetch(`http://localhost:3000/game_templates`)
        .then(response => response.json())
        .then(result => dispatch({ type: 'ADD_GAME_TEMPLATES', games: result }));
    };
  }

  export const addGameToStore = (object) => {
    return {
      type: 'ADD_GAME_TO_STORE',
      object
    };
  };