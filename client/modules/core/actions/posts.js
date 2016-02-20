export default {
  create({Meteor, Store, FlowRouter}, title, content) {
    if (!title || !content) {
      return Store.dispatch({
        type: 'SET_SAVING_POST_ERROR',
        error: 'Title & Content are required!'
      });
    }

    Store.dispatch({
      type: 'CLEAR_SAVING_POST_ERROR'
    });

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('posts.create', id, title, content, (err) => {
      if (err) {
        return Store.dispatch({
          type: 'SET_SAVING_POST_ERROR',
          error: err.message
        });
      }
    });
    FlowRouter.go(`/post/${id}`);
  },

  clearErrors({Store}) {
    return Store.dispatch({
      type: 'CLEAR_SAVING_POST_ERROR'
    });
  }
};
