import {check} from 'meteor/check';
import {uuid} from '/lib/match';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'posts.create'(_id, title, content) {
      check(_id, uuid);
      check(title, String);
      check(content, String);

      const createdAt = new Date();
      const post = {
        _id, title, content, createdAt,
        saving: true
      };

      Collections.Posts.insert(post);
    }
  });
}
