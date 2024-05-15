import { useEffect, useState } from "react";
import { useUserContext } from "../../Context/userContext";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { IPost } from "../../Services/Post/IPost";
import moment from "moment";
import { LikeServices } from "../../Services/Like/likeServices";

interface IProps {
  posts: IPost
}

const Comments = (props: IProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const { isUserLogged } = useUserContext()

  const alreadyLiked = async () => {
    const liked = await LikeServices.get(props.posts.id)
    setIsLiked(liked)
  }

  useEffect(() => {
    alreadyLiked()
  },[])

  return (
    <div>
      <div className="flex gap-2 hover:bg-gray-800 rounded-lg cursor-pointer">
        <img
          className="rounded-full w-8 h-8"
          src={props.posts.author.img}
        />
        <div className="flex flex-grow flex-col gap-2">
          <div className="flex flex-grow-1 justify-between">
            <div className="flex gap-2">
              <h1>{props.posts.author.name}</h1>
              <span className="font-extralight">{moment(props.posts.createDate).format("MMM Do YY")}</span>
            </div>
            {isUserLogged && (
              <button
                className="bg-white text-gray-900 active:bg-gray-900 font-bold uppercase 
                text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none 
                mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Follow
              </button>
            )}
          </div>

          <div>
            <h1>{props.posts.title}</h1>
            <p className="font-light">{props.posts.content}</p>
            <img
              className="rounded-lg"
              src={props.posts.img}
            />
          </div>

          <div className="flex gap-5">
            <div className='flex items-center gap-2'>
              {isLiked ?
                <FaHeart className="text-red-600"/>
                :
                <FaRegHeart/>
              }
              {props.posts.likes_qtd}
            </div>
            <div className='flex items-center gap-2'>
              <FaRegComment/>
              {props.posts.comments_qtd}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
