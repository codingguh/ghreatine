import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaThumbsUp,FaRegThumbsDown,FaThumbsDown } from "react-icons/fa";
import {  ReplyIcon } from '../../icons';
import Rune from '../../rune';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Actions ({   
  id,
  totalComments,
  upVotesBy,
  downVotesBy,
  onToggleVoteThread,}) {

    const { authUser } = useSelector((state) => state);
    const navigate = useNavigate();

    return (<div className="flex justify-between mt-3 max-w-md cursor-pointer">
      <div className="flex items-center group tablet:pr-4"        onClick={() => onToggleVoteThread(upVotesBy.includes(authUser?.id) ? 0 : 1)}>
        <Rune Icon={upVotesBy.includes(authUser?.id) ? (
              <FaThumbsUp className="h-5 w-5" />
            ) : (
              <FaRegThumbsUp />
            )} color="group-hover:bg-green-100" />
        <p className="text-xs group-hover:text-sky-500">{upVotesBy.length}</p>
      </div>
      <div className="flex gap-1 items-center group tablet:px-4"
      onClick={() => onToggleVoteThread(downVotesBy.includes(authUser?.id) ? 0 : -1)}
      >
        <Rune Icon={downVotesBy.includes(authUser?.id) ? (
            <FaThumbsDown className="h-5 w-5" />
          ) : (
            <FaRegThumbsDown className="h-5 w-5" />
          )} color="group-hover:bg-rose-100" />
        <p className="text-xs group-hover:text-rose-500">{downVotesBy.length}</p>
      </div>
      <div className="flex gap-1 items-center group tablet:px-4"
        onClick={() => navigate(`/thread/${id}#comments`)}
      >
        <Rune Icon={<ReplyIcon />} color="group-hover:bg-sky-100" />
        <p className="text-xs group-hover:text-green-500">{totalComments}</p>
      </div>
      <div className="flex gap-1 items-center group tablet:pl-4">
        
      </div>
    </div>)
  }
Actions.propTypes = {
  id: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleVoteThread: PropTypes.func.isRequired,
};

export default Actions;
