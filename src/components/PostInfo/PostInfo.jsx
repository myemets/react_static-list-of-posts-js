import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { user, userId, title, body, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}
          <UserInfo user={user} key={userId} />
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>
      {comments.length !== 0 ? (
        <CommentList comments={comments} />
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};