import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

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
    const text = this.refs.text.getValue();
    const { create, postId } = this.props;
    create(postId, text);
    this.refs.text.input.value = '';
  }

  render() {
    const { error } = this.props;
    return (
      <div>

        <TextField
          errorText={error ? this._renderError(error) : null}
          ref="text"
          fullWidth
          floatingLabelText="Enter Your Comment Here"
        /><br />

        <RaisedButton
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
  error: React.PropTypes.string,
};

export default CreateComment;
