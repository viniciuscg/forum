import { useEffect, useState } from 'react';
import { IUser } from "../../Services/User/IUser"
import { FollowServices } from '../../Services/Follow/followServices';
import { useUserContext } from '../../Context/userContext';

interface IProps {
  user: IUser
  openFollowingComponent(following: IUser[]): void
  openFollowersComponent(followers: IUser[]): void
  openEditProfile(): void
}

function UserProfile(props: IProps) {
  const [name, setName] = useState(props.user.name)
  const [img, setImg] = useState(props.user.img)
  const [backgroundImg, setBackgroundImg] = useState(props.user.backgroundImg)
  const [bio, setBio] = useState(props.user.bio)
  const [totalFolowing, setTotalFollowing] = useState(props.user.following?.length!)
  const [totalFollowed, setTotalFollowed] = useState(props.user.followedBy?.length!)
  const [following, setFollowing] = useState<IUser[]>([])
  const [followers, setFollowers] = useState<IUser[]>([])
  const { isUserLogged, user, isFollowing, isFollowingVerify } = useUserContext()

  const createFollow = async () => {
    await FollowServices.create(props.user.id)
    isFollowingVerify(props.user.id)
  }

  const deleteFollow = async () => {
    await FollowServices.deleteFollow(props.user.id)
    isFollowingVerify(props.user.id)
  }

  const setFollows = async () => {
    const followers = props?.user?.followedBy?.map(item => item.following)
    const following = props?.user?.following?.map(item => item.followedBy)


    if (followers) setFollowers(followers)
    if (following) setFollowing(following)
  }


  useEffect(() => {
    setBio(props.user.bio!)
    setImg(props.user.img!)
    setName(props.user.name)
    setTotalFollowing(props.user.following?.length!)
    setTotalFollowed(props.user.followedBy?.length!)
    setBackgroundImg(props.user.backgroundImg!)
    setFollows()
    isFollowingVerify(props.user.id)
  },[])


  return(
    <div className='flex flex-col gap-14'>
      <div 
        className="relative h-56 object-cover bg-black" 
        style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover' }}
      >
        <div className="absolute gap-5 bottom-0 transform w-full translate-y-1/2 items-center flex justify-between">
          <div className='flex items-center gap-2'>
            <img className="w-24 h-24 rounded-full border-4 border-white" src={img}  />
            <h2 className="text-2xl font-bold gap-2 flex">{name}</h2>
          </div>
          {user?.name === props.user.name ?
          <button
            className=" flex items-center h-10 bg-white text-gray-900 active:bg-gray-900 font-bold uppercase 
            text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none 
            mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={props.openEditProfile}
          >
            Edit Profile
          </button>
          :
            isUserLogged ?
              isFollowing ?
              <button
                className="bg-white text-gray-900 active:bg-gray-900 font-bold uppercase 
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
            :
            <div></div>
          }
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          {bio}
        </div>
        <div className='flex gap-5'>
          <div className='flex gap-2' onClick={() => props.openFollowingComponent(following)}>
            <p>{totalFolowing}</p>
            Following
          </div>
          <div className='flex gap-2' onClick={() => props.openFollowersComponent(followers)}>
            <p>{totalFollowed}</p>
            Follower
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
