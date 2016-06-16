import {
  useDeps, composeWithTracker, compose, composeAll
} from 'mantra-core';
import Component from '../components/create_comment';
import { composeAllWithStub } from 'react-komposer';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_COMMENT_ERROR');
  onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.comments.create,
  clearErrors: actions.comments.clearErrors,
  context: () => context
});

export const composerStub = ({context, clearErrors}, onData) => {
  onData(null, 'data`');
  return clearErrors;
};

export const depsMapperStub = (context, actions) => ({
  create: (x)=>console.log('create',x),
  clearErrors: (x)=>console.log('clearErrors',x),
  context: () => context
});

export default composeAllWithStub([
  composeWithTracker(composer),
  useDeps(depsMapper)
],[
  compose(composerStub),
  useDeps(depsMapperStub)
])(Component);
