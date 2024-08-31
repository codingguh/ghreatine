import Hashtag from '../components/hashtag/Hashtag'
import Feed from '../components/feed/Index'
import AddButton from '../components/button/AddButton'

const HomePage = () => {
  return (
    <div>
   
      <div className="flex flex-col lg:flex-row justify-center w-full">
        <div className="order-1 lg:order-1 lg:w-auto max-w-[20rem] lg:fixed lg:right-[30px] lg:top-[100px] lg:h-auto border-x-[1px]">
          <Hashtag />
        </div>
        <div className="order-2 lg:order-2 max-w-[37rem] border-x-[1px] mt-4 lg:mt-0 px-6 py-6 lg:overflow-y-auto lg:max-h-[calc(100vh-100px)]">
          <Feed />
        </div>
      </div>
      <AddButton/>
    </div>
  )
}

export default HomePage
