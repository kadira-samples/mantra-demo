export default {
  create({ Meteor, LocalState }, postId, text) {
    if (!text) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'Comment text is required.');
    }

    if (!postId) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'postId is required.');
    }

    LocalState.set('CREATE_COMMENT_ERROR', null);

    const id = Meteor.uuid();
    return Meteor.call('posts.createComment', id, postId, text, (err) => {
      if (err) {
        return LocalState.set('CREATE_COMMENT_ERROR', err.message);
      }
      return null;
    });
  },

  clearErrors({ LocalState }) {
    return LocalState.set('CREATE_COMMENT_ERROR', null);
  },
};
