import { useEffect, useState } from "react"
import { PostServices } from "../../../Services/Post/postServices"
import { IPost } from "../../../Services/Post/IPost"
import { Link } from "react-router-dom"

interface IProps{
  title: string
}

function MostLiked(props: IProps) {
  const [posts, setPosts] = useState<IPost[]>([])

  const getTopLikedPosts = async () => {
    const data = await PostServices.getTopLikedPosts()
    setPosts(data)
  }
  
  useEffect(() => {
    getTopLikedPosts()
  },[])

  return (
    <div className="gap-3 p-5 max-w-[300px] min-w-[300px] flex flex-col rounded-xl shadow-lg shadow-slate-950 relative overflow-hidden">
      <h1>{props.title}</h1>
      {posts?.map(post => 
      <Link to={`/details/${post.id}`}>
        <div>
          <div className="flex items-center gap-2">
            <img
              className="rounded-full w-8 h-8"
              src={post.author?.img}
            />
            <p className="text-wrap break-words">
              {post.author?.name}
            </p>
          </div>
          <div className="flex flex-col pl-10">
            <h1 className="text-wrap break-words">
              {post.title}
            </h1>
            <p className="font-light text-wrap break-words">
              {post.content}
            </p>
          </div>
        </div>
      </Link>
      )}
    </div>
  )
}

export default MostLiked
