import { IoSearch } from "react-icons/io5"
import Cards from "../../Components/Cards"
import MostFollow from "../../Components/Cards/mostFollow"
import MostLiked from "../../Components/Cards/mostLiked"
import NoData from "../../Components/noData"
import UserBar from "../../Components/userBar"
import { PostServices } from "../../Services/Post/postServices"
import { useState } from "react"
import { IPost } from "../../Services/Post/IPost"
import { IUser } from "../../Services/User/IUser"
import { UserServices } from "../../Services/User/userServices"
import Posts from "../../Components/posts"

const cards = [
  {
    element: <MostFollow title="Most Follow" />
  },
  {
    element: <MostLiked title="Most Liked" />
  }
]

function Search() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [users, setUsers] = useState<IUser[]>([])

  const getPostsLikedFromUser = async (name: string) => {
    const posts = await PostServices.getPostsByString(name)
    const users = await UserServices.getUsersByName(name)
    setPosts(posts)
    setUsers(users)
    console.log(posts);
    console.log(users);
  }

  return(
    <div className="flex justify-center gap-10 text-white">
      <UserBar />
      <div className="flex p-2 flex-col gap-8 max-w-[700px] min-w-[600px]">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search users or posts..."
            className="block w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full 
            focus:outline-none focus:border-blue-500 bg-transparent text-white placeholder-gray-400"
            onChange={e => getPostsLikedFromUser(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <IoSearch className="w-5 h-5 text-gray-500" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border-b p-3 flex flex-col gap-5">
            <h1>Users:</h1>
            {users.length > 0 ?
              users.map(user => 
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full w-8 h-8"
                  src={user.img}
                />
                <p className="text-wrap break-words">
                  {user.name}
                </p>
              </div>
              )
            :
              <NoData/>
          }
          </div>
          <div className="p-3 flex flex-col gap-2">
            <h1>Posts:</h1>
            {posts.length > 0 ?
              posts.map(post => 
                <Posts posts={post} />
              )
            :
              <NoData/>
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 gap-10">
      {cards.map(card => 
        <Cards content={card.element} />
      )}
      </div>
    </div>
  )
}

export default Search