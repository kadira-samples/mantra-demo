import {
  useDeps, composeWithTracker, compose, composeAll
} from 'mantra-core';
import Component from '../components/comment_list';
import { composeAllWithStub } from 'react-komposer';

export const composer = ({context, clearErrors, postId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.comments', postId).ready()) {
    const options = {
      sort: {createdAt: -1}
    };
    const comments = Collections.Comments.find({postId}, options).fetch();
    onData(null, {comments});
  } else {
    onData();
  }
};

export const composerStub = ({context, clearErrors}, onData) => {
  const comments = [
    {_id: 'one', text: 'This is cool.', author: 'arunoda'},
    {_id: 'two', text: 'Yeah! I agree.', author: 'sacha'},
  ];

  onData(null, {comments});
};
export default composeAllWithStub([
  composeWithTracker(composer),
  useDeps()
],[
  compose(composerStub),
])(Component);
