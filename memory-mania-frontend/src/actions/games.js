
  export const setData = (object) => {
    return {
      type: 'SET_DATA',
      object
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

  export const addToCurrentPair = (imageObject) => {
    return {
      type: 'ADD_TO_CURRENT_PAIR',
      imageObject
    };
  };

  export const clearCurrentPair = () => {
    return {
      type: 'CLEAR_CURRENT_PAIR'
    };
  };

  export const addToCompletedPairs = (imageObject) => {
    return {
      type: 'ADD_TO_COMPLETED_PAIRS',
      imageObject
    };
  };

  export const setNewTurn = (value) => {
    return {
      type: 'SET_NEW_TURN',
      value
    };
  };

  export const setPostClickDelay = (value) => {
    return {
      type: 'SET_POST_CLICK_DELAY',
      value
    };
  };

  export const addToHoldImages = (id) => {
    return {
      type: 'ADD_TO_HOLD_IMAGES',
      id
    };
  };

  export const clearHoldImages = () => {
    return {
      type: 'CLEAR_HOLD_IMAGES'
    };
  };

  export const clearGameData = () => {
    return {
      type: 'CLEAR_GAME_DATA'
    };
  };