import React from 'react';
import CreateComment from '../containers/create_comment.js';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Subheader from 'material-ui/lib/Subheader';
import Avatar from 'material-ui/lib/avatar';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';

const styles = {
  padded: {
    paddingTop: 40,
  },
};

const CommentList = ({ comments, postId }) => (

  <div className="comments">
    <div>
      <CreateComment postId={postId} />
    </div>
    <div className="comment-list">
      {comments.length === 0 ?
        (<List>
            <Subheader>Recent Comments</Subheader>
            <ListItem
              primaryText={<p>No comments yet!</p>}
              leftIcon={<CommunicationChatBubble />}
            />
            <Divider />
          </List>) :
        (<List style={styles.padded}>
          <Subheader>Recent Comments</Subheader>
            {comments.map(comment => (
              <div key={comment._id} className="comment">
                {comment.saving ? '...' : null}
                  <ListItem
                    primaryText={<span><b>{comment.author}:</b> {comment.text}</span>}
                    leftIcon={<CommunicationChatBubble />}
                  />
                  <Divider />
              </div>
            ))}
        </List>)
      }
    </div>
  </div>
);

CommentList.propTypes = {
  comments: React.PropTypes.array,
  postId: React.PropTypes.string,
};

export default CommentList;
