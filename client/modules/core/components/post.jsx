import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CommentList from '../../comments/containers/comment_list.js';

// This is necessary before React 1.0 to simulate touch events
injectTapEventPlugin();

const styles = {
  card: {
    width: '75%',
    margin: 'auto',
    padding: '40px',
  },
  text: {
    marginLeft: '1em',
    fontSize: '16px',
  },
};

const CardExampleWithoutAvatar = ({ post }) => (
  <Card style={styles.card}>
    <CardHeader
      title={<h2>{post.title}</h2>}
      subtitle={post.saving ? <span>Saving...</span> : null}
      actAsExpander
      showExpandableButton
    />
    <CardText expanded style={styles.text}>
      {post.content}
    </CardText>
    <CardActions expandable>
      <CommentList postId={post._id} />
    </CardActions>
  </Card>
);

export default CardExampleWithoutAvatar;
