export default (state = {currentPair: [], completedPairs: [], postClickDelay: false, gameComplete: false, newTurn: false}, action) => {
    switch (action.type) {
        case 'SET_GAME_TIME':
          return { ...state,
            time: action.time };
        
        case 'SET_GAME_COMPLETE':
            return { ...state,
                gameComplete: true };

        case 'ADD_TO_CURRENT_PAIR':
            return { ...state,
                currentPair: state.currentPair.concat(action.imageId) };

        case 'CLEAR_CURRENT_PAIR':
            return { ...state,
                currentPair: [] };

        case 'ADD_TO_COMPLETED_PAIRS':
            return { ...state,
                completedPairs: [...state.completedPairs, action.imageId] };

        case 'SET_NEW_TURN':
            return { ...state,
                newTurn: action.value };

        default:
          return state;
      }
    }
    