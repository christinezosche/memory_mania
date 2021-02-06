export function fetchGameTemplatesData() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_REQUEST' });
      fetch(`http://localhost:3000/game_templates`)
        .then(response => response.json())
        .then(result => dispatch({ type: 'ADD_GAME_TEMPLATES', games: result }));
    };
  }

  export function fetchStats() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_REQUEST' });
      fetch(`http://localhost:3000/games`)
        .then(response => response.json())
        .then(result => dispatch({ type: 'ADD_STATS', stats: result }));
    };
  }

  export const resetComplete = () => {
    return {
      type: 'RESET_COMPLETE'
    };
  };

  export function addGameToStore(configObj) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_REQUEST' });
      fetch('http://localhost:3000/game_templates', configObj)
       .then((response) => response.json())
       .then((object) => {
           if (object.status === "error") {
            dispatch({ type: 'SET_ERROR' })
           }
           else {
            dispatch({ type: 'ADD_GAME_TO_STORE', object })
           }
        })
  }
}

export function incrementTimesPlayed (id, configObj) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_REQUEST' });
    fetch(`http://localhost:3000/game_templates/` + id, configObj)
    .then((response) => response.json())
  }
}

export function addUsername(id, configObj) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_REQUEST' });
    fetch(`http://localhost:3000/games/` + id, configObj)
    .then((response) => response.json())
  }
}

export function deleteScore(id, configObj) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_REQUEST' });
    fetch(`http://localhost:3000/games/` + id, configObj)
    .then((response) => response.json())
  }
}
