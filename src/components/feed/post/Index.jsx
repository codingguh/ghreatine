import PropTypes from 'prop-types';
import Actions from './actions';
import Heading from './heading';
import { Avatar } from '@mantine/core';
import { asyncToggleVoteDetailThread } from '../../../redux/states/detailThread/action';
import { asyncToggleVoteThread } from '../../../redux/states/threads/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Parse from 'html-react-parser';

const Post = ({ id,
  title,
  body,
  category,
  createdAt,
  owner,
  totalComments,
  upVotesBy,
  downVotesBy,
  type, }) => {
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

  return (<div className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
    <div className="grid grid-cols-[auto,1fr] gap-3">
      <Avatar name={owner.name} color="initials" />
      <div>
        <Heading name={owner.name} username={owner.name} time={createdAt} />
        <Link to={`/thread/${id}`} style={{textDecoration:'underline'}}><span style={{fontWeight:'bold',textDecoration:'uderline',cursor:'pointer'}}>{title}</span></Link>
        <div className='line-clamp-2 flex-1'>{Parse(body)}</div>
        #{category}
        <Actions 
        
        id={id}
            totalComments={totalComments}
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
            onToggleVoteThread={onToggleVoteThread}
        />
      </div>
    </div>
  </div>)
  };


// Post.defaultProps = {
//   type: 'thread',
// };

Post.propTypes = {
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



export default Post;