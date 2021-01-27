export default (state = {completedGames: []}, action) => {
    switch (action.type) {
      case 'ADD_GAME':
        return { completedGames: state.completedGames.concat(action.game) };
          
      default:
        return state;
    }
  }
  