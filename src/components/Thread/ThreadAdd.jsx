/* eslint-disable jsx-a11y/label-has-associated-control */

// import { XMarkIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToggle } from '../../hooks';
import { asyncCreateThread } from '../../redux/states/threads/action';
import ThreadForm from './ThreadForm';
import { FaPlus } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

export default function ThreadAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checked, setChecked, changeChecked] = useToggle(false);

  const onCreateThread = async ({ title, body, category }) => {
    await dispatch(asyncCreateThread({ title, body, category })).then(
      ({ status }) => {
        if (status === 'success') {
          changeChecked(false);
          navigate('/threads');
        }
      },
    );
  };

  return (
    <>
      <label
        htmlFor="create-thread-modal"
        className="btn btn-circle fixed right-10 bottom-20"
      >
        <FaPlus className="h-6 w-6" />
      </label>
      <input
        type="checkbox"
        id="create-thread-modal"
        className="modal-toggle"
        checked={checked}
        onChange={setChecked}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <button
            type="button"
            className="btn btn-xs btn-circle absolute right-2 top-2"
            onClick={setChecked}
          >
            <FaXmark />
          </button>
          <h3 className="font-bold text-lg">Create Thread</h3>
          <ThreadForm onCreateThread={onCreateThread} />
        </div>
      </div>
    </>
  );
}
