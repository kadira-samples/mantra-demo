import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

class CreateComment extends React.Component {
  constructor() {
    super();
    this._create = this._create.bind(this);
  }

  _renderError(error) {
    return (
      <div className="error">
        {error}
      </div>
    );
  }

  _create() {
    const text = this.refs.text.value;
    const { create, postId } = this.props;
    create(postId, text);
    this.refs.text.value = '';
  }

  render() {
    const { error } = this.props;
    return (
      <div>
        {error ? this._renderError(error) : null}
        <textarea ref="text" placeholder="Enter your comment here.">

        </textarea>
        <br />
        <FlatButton
          onClick={this._create}
          primary
          label="Add Comment"
        />
      </div>
    );
  }
}

CreateComment.propTypes = {
  create: React.PropTypes.func,
  postId: React.PropTypes.string,
  error: React.PropTypes.object,
};

export default CreateComment;
