
import PropTypes from 'prop-types';
import Parse from 'html-react-parser';
// import { HashtagIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ThreadAction from './ThreadAction';
import { asyncToggleVoteDetailThread } from '../../redux/states/detailThread/action';
import { asyncToggleVoteThread } from '../../redux/states/threads/action';
import { Owner } from '../Owner';
import { FaHashtag } from 'react-icons/fa';

export default function Thread({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  totalComments,
  upVotesBy,
  downVotesBy,
  type,
}) {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state);

  const onToggleVoteThread = (voteType) => {
    if (authUser) {
      if (type === 'threads') {
        dispatch(
          asyncToggleVoteThread({ threadId: id, voteType, userId: authUser.id }),
        );
      } else {
        dispatch(
          asyncToggleVoteDetailThread({
            threadId: id,
            voteType,
            userId: authUser.id,
          }),
        );
      }
    } else {
      alert('Please login first');
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 duration-300">
      <div className="card-body">
        <h2 className="card-title line-clamp-2">
          <Link to={`/thread/${id}`}>{title}</Link>
        </h2>
        <Owner avatar={owner.avatar} name={owner.name} createdAt={createdAt} />
        <div className="line-clamp-3 flex-1">{Parse(body)}</div>
        <span className="badge">
          <FaHashtag className="h-3 w-3" />
          {category}
        </span>
        <ThreadAction
          id={id}
          totalComments={totalComments}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          onToggleVoteThread={onToggleVoteThread}
        />
      </div>
    </div>
  );
}

Thread.defaultProps = {
  type: 'thread',
};

Thread.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string,
};
