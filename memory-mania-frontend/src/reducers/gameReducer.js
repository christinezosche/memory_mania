export default (state = {games: [], stats: [], name: '', id: '', imageUrls: [], error: false, successfulSubmit: false, requesting: false, currentPair: [], completedPairs: [], holdImages: [], postClickDelay: false, gameComplete: false, newTurn: false, time: '' }, action) => {
    switch (action.type) {

        case 'START_ADDING_REQUEST':
            return {
                ...state,
                requesting: true
        };

        case 'ADD_STATS':
            return {
                ...state,
                stats: action.stats.sort((a, b) => {
                    return a.id - b.id
                  }),
                requesting: false
        };

        case 'ADD_GAME_TEMPLATES':
            return {
                ...state,
                games: action.games.sort((a, b) => {
                    return a.id - b.id
                  }),
                requesting: false
        };

        case 'SET_ERROR':
            return {
                ...state,
                requesting: false,
                error: true
        };

        case 'RESET_COMPLETE':
            return {
                ...state,
                successfulSubmit: false
        };

        case 'ADD_GAME_TO_STORE':
            return {
                ...state,
                games: [...state.games, action.object],
                requesting: false,
                error: false,
                successfulSubmit: true   
            };
 
        case 'ADD_GIFS':
            return {
                ...state,
                imageUrls: action.imageUrls.map(image => image.images.original.url),
                requesting: false
        };

        case 'ADD_MOVIE_IMAGES':
            return {
                ...state,
                imageUrls: action.imageUrls.map(url => `https://image.tmdb.org/t/p/w500${url}`),
                requesting: false
        };

        case 'ADD_NYT_IMAGES':
            return {
                ...state,
                imageUrls: action.imageUrls.map(object => object.url),
                requesting: false
        };
          
        case 'SET_DATA':
            return { ...state,
                id: action.object};

        case 'SET_GAME_NAME':
            return { ...state,
                    name: action.name};

        case 'SET_IMAGE_URLS':
            return { ...state,
                    imageUrls: action.array};

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
        
        case 'CLEAR_GAME_DATA':
            return {
                ...state,
                id: '', error: false, successfulSubmit: false, requesting: false, currentPair: [], completedPairs: [], holdImages: [], postClickDelay: false, gameComplete: false, newTurn: false, time: '' };

        default:
          return state;
      }
    }


