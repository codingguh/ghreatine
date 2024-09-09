import Hashtag from "../components/hashtag/Hashtag";
import Feed from "../components/feed/Index";
import AddButton from "../components/button/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { asyncPopulateUsersAndThreads } from "../redux/states/shared/action";

export default function HomePage() {
  const dispatch = useDispatch();
  const { threads, authUser } = useSelector((state) => state);
  const [keyword, setKeyword] = useState("");

  const onKeyword = (category) =>
    setKeyword((state) => (state === category ? "" : category));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadsList = threads.filter((thread) =>
    thread.category.includes(keyword)
  );

  const categories = threads
    .map((item) => item.category)
    .filter(
      (category, index, currentCategory) =>
        currentCategory.indexOf(category) === index
    );
  console.log(categories);
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center w-full">
        <div className="order-1 lg:order-1 lg:w-auto max-w-[20rem] lg:fixed lg:right-[30px] lg:top-[100px] lg:h-auto border-x-[1px]">
          <Hashtag
            categories={categories}
            keyword={keyword}
            onKeyword={onKeyword}
          />
        </div>
        <div className="order-2 lg:order-2 max-w-[37rem] border-x-[1px] mt-4 lg:mt-0 px-6 py-6 lg:overflow-y-auto lg:max-h-[calc(100vh-100px)]">
          <Feed threads={threadsList} />
        </div>
      </div>
      {authUser && <AddButton />}
    </div>
  );
}
