import React from 'react';
import { List, ListItem } from 'material-ui/lib/lists';
import ActionDescription from 'material-ui/lib/svg-icons/action/description';
import NavigationArrowForward from 'material-ui/lib/svg-icons/navigation/arrow-forward';
const styles = {
  svg: {
    height: 40,
    width: 40,
  },
  list: {
    width: '75%',
    margin: 'auto',
  },
  light: {
    backgroundColor: 'rgba(200,200,200,.1)',
  },
  dark: {
    backgroundColor: 'rgba(200,200,200,.3)',
  },
};

class PostList extends React.Component {
  constructor() {
    super();
    this.transition = this.transition.bind(this);
  }

  transition(postId) {
    const { goToPost } = this.props;
    return goToPost(postId);
  }

  render() {
    console.log(this.props);
    const { posts } = this.props;
    return (
      <List className="postlist" style={styles.list}>
          {posts.map((post, index) => (
            <ListItem
              key={post._id}
              style={index % 2 === 0 ? styles.light : styles.dark }
              primaryText={post.title}
              onClick={()=>this.transition(post._id)}
              ref="post"
              leftAvatar={
                <ActionDescription
                  style={styles.svg}
                  color="cornflowerblue"
                />
              }
              rightIcon={<NavigationArrowForward color="#666" />}
            />
          ))}
      </List>
    );
  }
}

PostList.propTypes = {
  posts: React.PropTypes.array,
  goToPost: React.PropTypes.func,
};

export default PostList;
