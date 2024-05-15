import { Link, useParams } from "react-router-dom"
import Cards from "../../Components/Cards"
import MostFollow from "../../Components/Cards/mostFollow"
import MostLiked from "../../Components/Cards/mostLiked"
import UserBar from "../../Components/userBar"
import UserProfile from "../../Components/userProfile"
import { useUserContext } from "../../Context/userContext"
import { UserServices } from "../../Services/User/userServices"
import { IUser } from "../../Services/User/IUser"
import { useEffect, useState } from "react"
import { PostServices } from "../../Services/Post/postServices"
import { IPost } from "../../Services/Post/IPost"
import Posts from "../../Components/posts"
import NoData from "../../Components/noData"
import PostPrompt from "../../Components/postPrompt"
import Modal from "../../Components/modal"
import EditProfile from "./modalChildrens/editProfile"
import FollowsContent from "./modalChildrens/followsContent"

const cards = [
  {
    element: <MostFollow title="Most Follow" />
  },
  {
    element: <MostLiked title="Most Liked" />
  }
]

function Profile() {
  const { id } = useParams()
  const { loggedUser, user } = useUserContext()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [userPostsIsSelected, setUserPostsIsSelected] = useState<boolean>(true)
  const [likedPostsIsSelected, setLikedPostsIsSelected] = useState<boolean>(false)
  const [userProfileOwner, setUserProfileOwner] = useState<IUser | undefined>()
  const [posts, setPosts] = useState<IPost[]>([])
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getUserById = async () => {
    const data = await UserServices.getById(Number(id))
    setUserProfileOwner(data)
    loggedUser()
  }

  const getPostsFromUser = async () => {
    const data = await PostServices.getPostsFromUser(Number(id))
    setIsLoading(false)
    setPosts(data)
    setUserPostsIsSelected(true)
    setLikedPostsIsSelected(false)
    loggedUser()
  }

  const getPostsLikedFromUser = async () => {
    const data = await PostServices.getPostsThatUserLiked(Number(id))
    setIsLoading(false)
    setPosts(data)
    setLikedPostsIsSelected(true)
    setUserPostsIsSelected(false)
    loggedUser()
  }

  const openEditProfile = () => {
    setModalContent(<EditProfile onClose={closeModal} user={userProfileOwner!} />);
    setIsModalOpen(true);
  }
  
  const openFollowingComponent = (following: IUser[]) => {
    setModalContent(<FollowsContent getUserById={getUserById} users={following} onClose={closeModal} />);
    setIsModalOpen(true);
  }
  const openFollowersComponent = (followers: IUser[]) => {
    setModalContent(<FollowsContent getUserById={getUserById} users={followers} onClose={closeModal} />);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    getUserById()
    getPostsFromUser()
  },[])

  return(
    <div className="flex justify-center gap-10 text-white">
      <UserBar />
      <div className="flex flex-col gap-8 min-w-[600px] max-w-[700px]">
        {userProfileOwner ?
          <UserProfile 
            openFollowingComponent={openFollowingComponent} 
            openFollowersComponent={openFollowersComponent} 
            openEditProfile={openEditProfile} 
            user={userProfileOwner}
          />
          :
          <NoData/>
        }
        {user?.id === Number(id) ?
          <PostPrompt />
          : <div></div>
        }
        <div className="flex justify-center gap-40">
          <h1 
            className={userPostsIsSelected ?
              "transition duration-300 ease-in-out border-b border-transparent text-blue-500  hover:text-blue-500 hover:border-blue-500 hover:shadow-md hover:cursor-pointer"
              : 
              "transition duration-300 ease-in-out border-b border-transparent text-gray-600 hover:text-gray-600 hover:border-gray-600 hover:shadow-md hover:cursor-pointer"
            } 
            onClick={() => getPostsFromUser()}
          >
            user posts
          </h1>
          <div className="border-l h-8"/>
          <h1 
            className={likedPostsIsSelected ?
              "transition duration-300 ease-in-out border-b border-transparent text-blue-500  hover:text-blue-500 hover:border-blue-500 hover:shadow-md hover:cursor-pointer"
              : 
              "transition duration-300 ease-in-out border-b border-transparent text-gray-600 hover:text-gray-600 hover:border-gray-600 hover:shadow-md hover:cursor-pointer"
            } 
            onClick={() => getPostsLikedFromUser()}
          >
            liked posts
          </h1>
        </div>
        {isLoading ?
          <NoData/>
        :
          posts.map(post =>
            <Link to={`/details/${post.id}`}><Posts posts={post}/></Link> 
          )
        }
      </div> 

      <div className="flex flex-col p-10 gap-10">
      {cards.map(card => 
        <Cards content={card.element} />
      )}
      </div>

      {isModalOpen &&
        <Modal isModalOpen={isModalOpen} onClose={closeModal}>
          {modalContent}
        </Modal>
      }
    </div>
  )
}

export default Profile