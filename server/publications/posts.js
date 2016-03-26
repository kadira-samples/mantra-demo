import { Posts, Comments } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.publish('posts.list', () => {
    const selector = {};
    const options = {
      fields: { _id: 1, title: 1 },
      sort: { createdAt: -1 },
      limit: 10,
    };

    return Posts.find(selector, options);
  });

  Meteor.publish('posts.single', postId => {
    check(postId, String);
    const selector = { _id: postId };
    return Posts.find(selector);
  });

  Meteor.publish('posts.comments', postId => {
    check(postId, String);
    const selector = { postId };
    return Comments.find(selector);
  });
}
