export default (state = {gameComplete: false}, action) => {
    switch (action.type) {
        case 'SET_GAME_TIME':
          return { ...state,
            time: action.time };
        
        case 'SET_GAME_COMPLETE':
            return { ...state,
                gameComplete: true };

        default:
          return state;
      }
    }
    