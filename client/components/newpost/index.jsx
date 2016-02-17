// XXX: We need to find a way to use npm's react
// Otherwise, we can't run tests properly.
// To test this component, use React from npm directly
// as shown below
import React from 'react';
// import React from 'react';

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
    event.preventDefault();
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.value, contentRef.value);
  }
}

export default NewPost;
