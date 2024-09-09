import { useParams } from 'react-router-dom';
import {  Comments, Thread } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/feed/post/Index';
import { useEffect } from 'react';
import { asyncGetDetailThread, resetDetailThreadActionCreator } from '../redux/states/detailThread/action';
import { ThreadAdd } from '../components/Thread';
import AddButton from '../components/button/AddButton';

const ThreadPage = () => {
  const { id } = useParams();
  const { authUser, detailThread } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(asyncGetDetailThread(id));
    return () => {
      dispatch(resetDetailThreadActionCreator());
    };
  }, []);

  if (!detailThread || !id) return null;

  // Use the id to fetch thread data or render content based on the id
  return (
    <div>
     
      <Thread
        key={detailThread.id}
        id={detailThread.id}
        title={detailThread.title}
        body={detailThread.body}
        category={detailThread.category}
        createdAt={detailThread.createdAt}
        owner={detailThread.owner}
        totalComments={detailThread.comments.length}
        upVotesBy={detailThread.upVotesBy}
        downVotesBy={detailThread.downVotesBy}
      />
      <Comments threadId={id} comments={detailThread.comments} />
      {authUser && <AddButton />}
    </div>
  );
};

export default ThreadPage;
