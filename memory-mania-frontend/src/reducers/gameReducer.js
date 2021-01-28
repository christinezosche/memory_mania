export default (state = {currentPair: [], completedPairs: [], holdImages: [], postClickDelay: false, gameComplete: false, newTurn: false}, action) => {
    switch (action.type) {
        case 'SET_GAME_TIME':
          return { ...state,
            time: action.time };
        
        case 'SET_GAME_COMPLETE':
            return { ...state,
                gameComplete: true };

        case 'ADD_TO_CURRENT_PAIR':
            return { ...state,
                currentPair: state.currentPair.concat(action.imageObject) };

        case 'CLEAR_CURRENT_PAIR':
            return { ...state,
                currentPair: [] };

        case 'ADD_TO_COMPLETED_PAIRS':
            return { ...state,
                completedPairs: [...state.completedPairs, action.imageObject] };

        case 'SET_NEW_TURN':
            return { ...state,
                newTurn: action.value };
        
        case 'SET_POST_CLICK_DELAY':
            return { ...state,
                postClickDelay: action.value };

        case 'ADD_TO_HOLD_IMAGES':
            return { ...state,
                holdImages: [...state.holdImages, action.id] };

        case 'CLEAR_HOLD_IMAGES':
            return { ...state,
                holdImages: [] };

        default:
          return state;
      }
    }
    