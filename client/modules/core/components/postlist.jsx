import React from 'react';

const PostList = ({ posts }) => (
  <div className="postlist">
    <ul>
      {posts.map(post => (
        <li key={post._id}>
          <a href={`/post/${post._id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

PostList.propTypes = {
  posts: React.PropTypes.array,
};

export default PostList;
