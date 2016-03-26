import React from 'react';

class NewPost extends React.Component {
  constructor() {
    super();
    this.createPost = this.createPost.bind(this);
  }

  createPost(event) {
    // Becaus the test cannot get event argument
    // so call preventDefault() on undefined cause an error
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const { create } = this.props;
    const { titleRef, contentRef } = this.refs;

    create(titleRef.value, contentRef.value);
  }

  render() {
    const { error } = this.props;
    return (
      <form className="new-post" onSubmit={this.createPost}>
        <h2>Add New Post</h2>
        {error ? <p style={{ color: 'red' }}>{error}</p> : null}

        <input ref="titleRef" type="Text" placeholder="Enter your post title." /> <br />
        <textarea ref="contentRef" placeholder="Enter your post content." /> <br />
        <button type="submit">Add New</button>
      </form>
    );
  }
}

NewPost.propTypes = {
  error: React.PropTypes.string,
  create: React.PropTypes.func,
};

export default NewPost;
