import { Link, useParams } from "react-router-dom"
import Cards from "../../Components/Cards"
import MostFollow from "../../Components/Cards/mostFollow"
import MostLiked from "../../Components/Cards/mostLiked"
import Comments from "../../Components/comments"
import Posts from "../../Components/posts"
import UserBar from "../../Components/userBar"
import { IPost } from "../../Services/Post/IPost"
import { useEffect, useState } from "react"
import { PostServices } from "../../Services/Post/postServices"
import { FaArrowLeft } from "react-icons/fa"
import NoData from "../../Components/noData"
import { useUserContext } from "../../Context/userContext"
import PostPrompt from "../../Components/postPrompt"

const cards = [
  {
    element: <MostFollow title="Most Follow" />
  },
  {
    element: <MostLiked title="Most Liked" />
  }
]

function PostDetails() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [post, setPost] = useState<IPost | undefined>()
  const { postId } = useParams()
  const { loggedUser, isUserLogged } = useUserContext()

  

  const getPostById = async () => {
    const data = await PostServices.getById(Number(postId))
    setPost(data)
    setIsLoading(false)
    loggedUser()
  }
  
  useEffect(() => {
    getPostById()
  },[postId])

    return(
      <div className="flex justify-center gap-10 text-white">
        <UserBar />
        <div className="border flex flex-col gap-8 max-w-[700px]">
          <div>
            <Link to="/">
              <div className="border flex items-center p-5 gap-4 hover:bg-gray-800">
                <FaArrowLeft />
                <h1>Posts</h1>
              </div>
            </Link>
          </div>
          {isLoading ?
          <NoData/>
          :
            post &&
            <>
              {post.parent && 
              <div className="relative">
                <Posts posts={post.parent} />
                <div className="border-l h-[150px] absolute top-10 left-6 transform -translate-x-1/2 -translate-y-0"></div>
              </div>
              }
              <Posts posts={post} />
            </>
          }
          <hr />
          <div className="flex flex-col gap-10 p-5">
            <h1>Comments:</h1>
            {isUserLogged &&
              <PostPrompt parentId={post?.id}/>
            }
            {isLoading ?
              <NoData/>
            :
              post?.comments?.map(post => 
                <div className="flex flex-col gap-5">
                  <Link to={`/details/${post.id}`}><Comments posts={post} /></Link>
                  <hr />
                </div> 
            )}
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

export default PostDetails