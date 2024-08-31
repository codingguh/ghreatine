
import { useSelector } from "react-redux";
import Post from "./post/Index";
import PropTypes from 'prop-types';

const Feed = ({threads}) => {
  const { users } = useSelector((state) => state);

  return (

    <section>
      {threads? threads.map((thread) => (
        <Post 
        key={thread.id}
        id={thread.id}
        title={thread.title}
        body={thread.body}
        category={thread.category}
        createdAt={thread.createdAt}
        owner={users.find((user) => user.id === thread.ownerId)}
        totalComments={thread.totalComments}
        upVotesBy={thread.upVotesBy}
        downVotesBy={thread.downVotesBy}
        type="threads"
        />
      )):<>Not found</>}
    </section>
  )
}

const threadsShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Feed.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadsShape)).isRequired,
};

export default Feed
