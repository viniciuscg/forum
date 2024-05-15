import { FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa';
import { useUserContext } from '../../Context/userContext';
import { IPost } from '../../Services/Post/IPost';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { LikeServices } from '../../Services/Like/likeServices';
import { FollowServices } from '../../Services/Follow/followServices';
import { Link } from 'react-router-dom';

interface IProps {
  posts: IPost
}

function Posts(props: IProps) {
  const [likes, setLikes] = useState<number>(props.posts?.likes_qtd)
  const [comments, setComments] = useState<number>(props.posts.comments_qtd)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const { isUserLogged, user, isFollowing, isFollowingVerify } = useUserContext()


  const alreadyLiked = async () => {
    const liked = await LikeServices.get(props.posts.id)
    setIsLiked(liked)
  }

  const createLike = async () => {
    await LikeServices.create({
      postId: props.posts.id,
      userId: user!.id,
    })
    setIsLiked(true)
    setLikes(likes + 1)
  }

  const deleteLike = async () => {
    await LikeServices.delete(props.posts.id)
    setIsLiked(false)
    setLikes(likes - 1)
  }

  const createFollow = async () => {
    await FollowServices.create(props.posts.authorId)
    isFollowingVerify(props.posts.authorId)
  }

  const deleteFollow = async () => {
    await FollowServices.deleteFollow(props.posts.authorId)
    isFollowingVerify(props.posts.authorId)
  }

  useEffect(() => {
    alreadyLiked()
    setLikes(props.posts.likes_qtd)
    setComments(props.posts.comments_qtd)
    isFollowingVerify(props.posts.authorId)
  },[])

  return (
    <div className="flex gap-2 min-w-[600px] hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
      <img
        className="rounded-full w-8 h-8"
        src={props.posts.author.img}
      />
      <div className="flex flex-grow flex-col gap-2">
        <div className="flex justify-between">
          <div className='flex gap-2 items-center'>
            <Link to={`/profile/${props.posts.authorId}`}><h1>{props.posts.author.name}</h1></Link>
            <p className='font-light text-[14px]'>{moment(props.posts.createDate).format("MMM Do YY")}</p>
          </div>
          {isUserLogged && (
            isFollowing ?
            <button
              className="bg-white text-gray-900 active:bg-red-700 font-bold uppercase 
              text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none 
              mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => deleteFollow()}
            >
              Unfollow
            </button>
            :
            <button
              className="bg-white text-gray-900 active:bg-gray-900 font-bold uppercase 
              text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none 
              mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => createFollow()}
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
          <div className='flex z-40 items-center gap-2'>
            {isLiked ?
              <FaHeart onClick={() => deleteLike()} className='text-red-700'/>
              :
              <FaRegHeart onClick={() => createLike()}/>
            }
            {likes}
          </div>
          <div className='flex items-center gap-2'>
            <FaRegComment/>
            {comments}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts
