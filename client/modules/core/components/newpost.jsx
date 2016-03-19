import React from 'react';

class NewPost extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <form className="new-post" onSubmit={this.createPost.bind(this)}>
        <h2>Add New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input ref="titleRef" type="Text" placeholder="Enter your post title." /> <br/>
        <textarea ref="contentRef" placeholder="Enter your post content." /> <br/>
        <button type="submit">Add New</button>
      </form>
    );
  }

  createPost(event) {
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.value, contentRef.value);
  }
}

export default NewPost;
