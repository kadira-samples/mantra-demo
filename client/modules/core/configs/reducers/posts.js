const defaultState = { SAVING_POST_ERROR: null};
const postsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_SAVING_POST_ERROR':
      return {
        ...state,
        SAVING_POST_ERROR: action.error
      };
    case 'CLEAR_SAVING_POST_ERROR':
      return {
        ...state,
        SAVING_POST_ERROR: null
      };
    default:
      return state;
  }
};

export default postsReducer;