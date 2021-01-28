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

  export const addToCurrentPair = (imageId) => {
    return {
      type: 'ADD_TO_CURRENT_PAIR',
      imageId
    };
  };

  export const clearCurrentPair = () => {
    return {
      type: 'CLEAR_CURRENT_PAIR'
    };
  };

  export const addToCompletedPairs = (imageId) => {
    return {
      type: 'ADD_TO_COMPLETED_PAIRS',
      imageId
    };
  };

  export const setNewTurn = (value) => {
    return {
      type: 'SET_NEW_TURN',
      value
    };
  };