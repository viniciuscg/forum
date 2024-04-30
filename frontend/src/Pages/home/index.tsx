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
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { isUserLogged, loggedUser } = useUserContext()

  const searchMore = async (currentPage: number) => {
    const newData = await PostServices.getAll(currentPage + 1);
    setIsLoading(false)
  }

  const getAllPosts = async (page: number) => {
    const data = await PostServices.getAll(page)
    setPosts(data)
    setIsLoading(false)
  }

  useEffect(() => {
    setCurrentPage(1)
    getAllPosts(currentPage)
    loggedUser()
  },[])

    return(
      <div className="flex justify-center gap-10 text-white">
        <UserBar />
        <div className="flex flex-col gap-8 max-w-[600px]">
          {isUserLogged &&
            <PostPrompt />
          }
          {isLoading ?
            <NoData/>
          :
            posts.map(post =>
              <Link to={`/details/${post.id}`}><Posts posts={post}/></Link> 
            )
          }
          <div onClick={() => searchMore(currentPage)} className="cursor-pointer flex justify-center border-t-[0.5px] hover:bg-gray-800 p-2">
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