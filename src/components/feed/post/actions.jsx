import PropTypes from 'prop-types';
import { ThumbsDown, ThumbsUp, ReplyIcon } from '../../icons';
import Rune from '../../rune';

const Actions = ({ replies, retweets, likes }) => (
  <div className="flex justify-between mt-3 max-w-md cursor-pointer">
    <div className="flex items-center group tablet:pr-4">
      <Rune Icon={<ThumbsUp />} color="group-hover:bg-green-100" />
      <p className="text-xs group-hover:text-sky-500">{likes}</p>
    </div>
    <div className="flex gap-1 items-center group tablet:px-4">
      <Rune Icon={<ThumbsDown />} color="group-hover:bg-rose-100" />
      <p className="text-xs group-hover:text-rose-500">{retweets}</p>
    </div>
    <div className="flex gap-1 items-center group tablet:px-4">
      <Rune Icon={<ReplyIcon />} color="group-hover:bg-sky-100" />
      <p className="text-xs group-hover:text-green-500">{replies}</p>
    </div>
    <div className="flex gap-1 items-center group tablet:pl-4">
      459 days ago
    </div>
  </div>
);

Actions.propTypes = {
  replies: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Actions;
