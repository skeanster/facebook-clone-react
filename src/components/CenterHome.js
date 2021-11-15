import ProfilePic from './miscimages/default-profile.png';
import { Link } from 'react-router-dom';

function CenterHome(props) {
  const { username, posts } = props;
  return (
    <div className="centerHomeContainer">
      <div className="newPostContainer">
        <div className="newPostMainContainer">
          <Link to="/facebook-clone-react/ProfilePage">
            <img src={ProfilePic} alt="profile pic" className="ProfileImage" />
          </Link>
          <div className="mainNewPostButton">
            What's on your mind, {username}?
          </div>
        </div>
      </div>
      {posts.map((post) => {
        return (
          <div className="postContainer" key={post.poster + post.post}>
            <div className="posterName">{post.poster}</div>
            <div className="postText">{post.post}</div>
            <div className="likeInfoContainer">
              <div className="likePic">i</div>
              <div className="likeTotal">{post.likes}</div>
              <div className="commentsTotal">{post.comments.length}</div>
            </div>
            <div className="interactionsContainer">
              <div className="likeButton">Like</div>
              <div className="commentButton">Comment</div>
              <div className="shareButton">Share</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CenterHome;
