import { useEffect, useState } from "react"
import Cards from "../../Components/Cards"
import MostFollow from "../../Components/Cards/mostFollow"
import MostLiked from "../../Components/Cards/mostLiked"
import PostPrompt from "../../Components/postPrompt"
import Posts from "../../Components/posts"
import UserBar from "../../Components/userBar"
import { useUserContext } from "../../Context/userContext"
import { PostServices } from "../../Services/Post/postServices"
import { IPost } from "../../Services/Post/IPost"
import { Link } from "react-router-dom"
import NoData from "../../Components/noData"

const cards = [
  {
    element: <MostFollow title="Most Follow" />
  },
  {
    element: <MostLiked title="Most Liked" />
  }
]

function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [allPostsIsSelected, setAllPostsIsSelected] = useState<boolean>(false)
  const [followingPostsIsSelected, setFollowingPostsIsSelected] = useState<boolean>(false)
  const { isUserLogged, loggedUser } = useUserContext()


  const getAllPosts = async () => {
    const data = await PostServices.getAll()
    setPosts(data)
    setIsLoading(false)
    setAllPostsIsSelected(true)
    setFollowingPostsIsSelected(false)
    loggedUser()
  }

  const getPostsByFollowing = async () => {
    const data = await PostServices.getPostsByFollowing()
    setPosts(data)
    setIsLoading(false)
    setAllPostsIsSelected(false)
    setFollowingPostsIsSelected(true)
    loggedUser()
  }

  useEffect(() => {
    getAllPosts()
  },[])

    return(
      <div className="flex justify-center gap-10 text-white">
        <UserBar />
        <div className="flex flex-col gap-8 max-w-[700px] min-w-[600px]">
          {isUserLogged &&
            <PostPrompt />
          }
          {isUserLogged &&
          <div className="flex justify-center gap-40">
            <h1 
              className={allPostsIsSelected ?
                "transition duration-300 ease-in-out border-b border-transparent text-blue-500  hover:text-blue-500 hover:border-blue-500 hover:shadow-md hover:cursor-pointer"
                : 
                "transition duration-300 ease-in-out border-b border-transparent text-gray-600 hover:text-gray-600 hover:border-gray-600 hover:shadow-md hover:cursor-pointer"
              } 
              onClick={() => getAllPosts()}
            >
              all posts
            </h1>
            <div className="border-l h-8"/>
            <h1 
              className={followingPostsIsSelected ?
                "transition duration-300 ease-in-out border-b border-transparent text-blue-500  hover:text-blue-500 hover:border-blue-500 hover:shadow-md hover:cursor-pointer"
                : 
                "transition duration-300 ease-in-out border-b border-transparent text-gray-600 hover:text-gray-600 hover:border-gray-600 hover:shadow-md hover:cursor-pointer"
              } 
              onClick={() => getPostsByFollowing()}
            >
              follows posts
            </h1>
          </div>
          }
          {isLoading ?
            <NoData/>
          :
            posts.map(post =>
              <Link to={`/details/${post.id}`}><Posts posts={post}/></Link> 
            )
          }
          <div className="cursor-pointer flex justify-center border-t-[0.5px] hover:bg-gray-800 p-2">
            <h1>Show more..</h1>
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

export default Home