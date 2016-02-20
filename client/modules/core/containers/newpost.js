import NewPost from '../components/newpost.jsx';
import {useDeps, compose, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {Store} = context();

  // subscribe to state updates
  // and keep handle to unsubscribe
  const unsubscribe = Store.subscribe(() => {
    const error = Store.getState().posts.SAVING_POST_ERROR;
    onData(null, {error})
  });

  // get initial state
  const error = Store.getState().posts.SAVING_POST_ERROR;
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
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(NewPost);
