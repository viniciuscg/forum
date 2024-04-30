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

  const getPostById = async () => {
    const data = await PostServices.getById(Number(postId));
    setPost(data);
    setIsLoading(false)
  };
  
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
            <Posts posts={post} />
          }
            <hr />
          <h1>Comments:</h1>
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
        <div className="flex flex-col p-10 gap-10">
        {cards.map(card => 
          <Cards content={card.element} />
        )}
        </div>
      </div>
    )
}

export default PostDetails