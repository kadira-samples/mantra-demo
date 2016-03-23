const defaultState = { CREATE_COMMENT_ERROR: null};
const commentsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_CREATE_COMMENT_ERROR':
      return {
        ...state,
        CREATE_COMMENT_ERROR: action.error
      };
    case 'CLEAR_CREATE_COMMENT_ERROR':
      return {
        ...state,
        CREATE_COMMENT_ERROR: null
      };
    default:
      return state;
  }
};

export default commentsReducer;