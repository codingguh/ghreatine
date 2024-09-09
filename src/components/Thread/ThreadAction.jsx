import React from 'react';
import PropTypes from 'prop-types';
// import {
//   ChatBubbleLeftRightIcon,
//   HandThumbDownIcon as HandThumbDownIconOutline,
//   HandThumbUpIcon as HandThumbUpIconOutline,
// } from '@heroicons/react/24/outline';
// import {
//   HandThumbDownIcon as HandThumbDownIconFilled,
//   HandThumbUpIcon as HandThumbUpIconFilled,
// } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaMessage, FaRegMessage, FaSquareDribbble } from 'react-icons/fa6';
import { FaRegThumbsDown, FaRegThumbsUp, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

export default function ThreadAction({
  id,
  totalComments,
  upVotesBy,
  downVotesBy,
  onToggleVoteThread,
}) {
  const { authUser } = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <div className="card-actions flex">
      <div className="flex items-center">
        <span>{upVotesBy.length}</span>
        <button
          type="button"
          className="btn btn-ghost btn-sm btn-circle"
          onClick={() => onToggleVoteThread(upVotesBy.includes(authUser?.id) ? 0 : 1)}
        >
          {upVotesBy.includes(authUser?.id) ? (
              <FaThumbsUp className="h-5 w-5" />
          ) : (
         
            <FaRegThumbsUp className="h-5 w-5" />
          )}
        </button>
      </div>
      <div className="flex items-center">
        <span>{downVotesBy.length}</span>
        <button
          type="button"
          className="btn btn-ghost btn-sm btn-circle"
          onClick={() => onToggleVoteThread(downVotesBy.includes(authUser?.id) ? 0 : -1)}
        >
          {downVotesBy.includes(authUser?.id) ? (
                   <FaThumbsDown className="h-5 w-5" />
           
          ) : (
            <FaRegThumbsDown className="h-5 w-5" />
          )}
        </button>
      </div>
      <div className="flex items-center">
        <span>{totalComments}</span>
        <button
          type="button"
          className="btn btn-ghost btn-sm btn-circle"
          onClick={() => navigate(`/thread/${id}#comments`)}
        >
          <FaRegMessage className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

ThreadAction.propTypes = {
  id: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleVoteThread: PropTypes.func.isRequired,
};
