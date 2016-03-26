import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

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

    create(titleRef.getValue(), contentRef.getValue());
  }

  render() {
    const { error } = this.props;
    return (
      <form className="new-post" onSubmit={this.createPost}>
        <TextField
          ref="titleRef"
          floatingLabelText="Enter your post title."
          errorText={error}
        /><br />
        <TextField
          ref="contentRef"
          floatingLabelText="Enter your post conetent."
          multiLine
          rows={6}
        /><br />
        <RaisedButton secondary label="Add New" type="submit" />
      </form>
    );
  }
}

NewPost.propTypes = {
  error: React.PropTypes.string,
  create: React.PropTypes.func,
};

export default NewPost;
