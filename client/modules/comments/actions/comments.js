export default {
  create({Meteor, Store}, postId, text) {
    if (!text) {
      return Store.dispatch({
        type: 'SET_CREATE_COMMENT_ERROR',
        error: 'Comment text is required.'
      });
    }

    if (!postId) {
      return Store.dispatch({
        type: 'SET_CREATE_COMMENT_ERROR',
        error: 'postId is required.'
      });
    }

    Store.dispatch({
      type: 'CLEAR_CREATE_COMMENT_ERROR'
    });

    const id = Meteor.uuid();
    Meteor.call('posts.createComment', id, postId, text, (err) => {
      if (err) {
        return Store.dispatch({
          type: 'SET_CREATE_COMMENT_ERROR',
          error: err.message
        });
      }
    });
  },

  clearErrors({Store}) {
    return Store.dispatch({
      type: 'CLEAR_CREATE_COMMENT_ERROR'
    });
  }
};
