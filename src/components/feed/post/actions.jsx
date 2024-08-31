import PropTypes from 'prop-types';
import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon, ThumbsDown, ThumbsUp } from '../../icons';
import Rune from '../../rune';
import { IconThumbDown, IconThumbDownOff, IconThumbUp } from '@tabler/icons-react';

const Actions = ({ replies, retweets, likes }) => (
  <div className="flex justify-between mt-3 max-w-md cursor-pointer">
    <div className="flex items-center group tablet:pr-4">
    <Rune
        Icon={<ThumbsUp fill="group-hover:fill-green-500" />}
        color="group-hover:bg-green-100"
      />
      <p className="text-xs group-hover:text-sky-500">{replies}</p>
    </div>
    <div className="flex gap-1 items-center group tablet:px-4">
      <Rune
        Icon={<ThumbsDown fill="group-hover:fill-rose-500" />}
        color=" group-hover:bg-rose-100 "
      />
      <p className="text-xs group-hover:text-rose-500">{retweets}</p>
    </div>
    <div className="flex gap-1 items-center group tablet:px-4">
    <Rune
        Icon={<ReplyIcon fill="group-hover:fill-sky-500" />}
        color="group-hover:bg-sky-100"
      />
    
      <p className="text-xs group-hover:text-green-500">{likes}</p>
    </div>
    <div className="flex gap-1 items-center group tablet:pl-4">
      459 hari yang lalu
    </div>
  </div>
);

Actions.propTypes = {
  replies: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Actions;