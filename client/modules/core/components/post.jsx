/* import React from 'react';

const Post = ({post}) => (
  <div>
    {post.saving ? <p>Saving...</p> : null}
    <h2>{post.title}</h2>
    <p>
      {post.content}
    </p>
    <div>
      <h4>Comments</h4>
    </div>
  </div>
);

export default Post; */
import React from 'react';
import CommentList from '../../comments/containers/comment_list.js';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';

const CardExampleWithAvatar = ({ post }) => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://lorempixel.com/100/100/nature/"
    />
    <CardMedia
      overlay={<CardTitle title={post.title} subtitle="Overlay subtitle" />}
    >
      <img src="http://lorempixel.com/600/337/nature/" />
    </CardMedia>
    <CardText>
      {post.content}
    </CardText>
    <CardActions>
      <CommentList postId={post._id} />
    </CardActions>
  </Card>
);

CardExampleWithAvatar.propTypes = {
  post: React.PropTypes.object,
};

export default CardExampleWithAvatar;
