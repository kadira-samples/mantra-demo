import {
  useDeps, compose, composeAll
} from 'mantra-core';
import Component from '../components/create_comment.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Store} = context();

  // subscribe to state updates
  // and keep handle to unsubscribe
  const unsubscribe = Store.subscribe(() => {
    const error = Store.getState().comments.CREATE_COMMENT_ERROR;
    onData(null, {error})
  });

  // get initial state
  const error = Store.getState().comments.CREATE_COMMENT_ERROR;
  onData(null, {error});

  // function to unsubscribe from Store
  // and clearing error
  const cleanup = () => {
    unsubscribe();
    clearErrors();
  };

  // running cleanup when unmounting the component
  return cleanup;
};

export const depsMapper = (context, actions) => ({
  create: actions.comments.create,
  clearErrors: actions.comments.clearErrors,
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(Component);
