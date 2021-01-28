export const addGame = (game) => {
    return {
      type: 'ADD_GAME',
      game
    };
  };

  export const setGameTime = (time) => {
    return {
      type: 'SET_GAME_TIME',
      time
    };
  };

  export const setGameComplete = () => {
    return {
      type: 'SET_GAME_COMPLETE'
    };
  };