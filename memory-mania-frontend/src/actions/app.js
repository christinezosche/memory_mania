export const saveGameData = (gameObject) => {
    return {
      type: 'SAVE_GAME_DATA',
      gameObject
    };
  };