import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { useUserContext } from '../../Context/userContext';
import { IPost } from '../../Services/Post/IPost';
import { useEffect, useState } from 'react';

interface IProps {
  posts: IPost;
}

function Posts(props: IProps) {
  const [likes, setLikes] = useState<number>(0)
  const [comment, setComment] = useState<number>(0)
  const { isUserLogged } = useUserContext();

  const count = () => {
    const likesQtd = new Set(props.posts.likes)
    const commentQtd = new Set(props.posts.comments)

    const totalComment = commentQtd.size
    const totalLikesQtd = likesQtd.size

    setLikes(totalLikesQtd)
    setComment(totalComment)
  }

  useEffect(() => {
    count()
  },[])

  return (
    <div className="flex gap-2 hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
      <img
        className="rounded-full w-8 h-8"
        src={props.posts.author.img}
        alt=""
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1>{props.posts.author.name}</h1>
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
            alt="dasdasdas"
          />
        </div>

        <div className="flex gap-5">
          <div className='flex items-center gap-2'>
            <FaRegHeart/>
            {likes}
          </div>
          <div className='flex items-center gap-2'>
            <FaRegComment/>
            {comment}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
