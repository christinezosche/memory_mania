export default (state = {completedGames: []}, action) => {
    switch (action.type) {
      case 'SAVE_GAME_DATA':
        return { completedGames: state.completedGames.concat(action.gameObject) };
          
      default:
        return state;
    }
  }
  