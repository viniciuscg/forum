import { useEffect, useState } from "react"
import { UserServices } from "../../../Services/User/userServices"
import { IUser } from "../../../Services/User/IUser"
import { Link } from "react-router-dom"

interface IProps{
  title: string
}

function MostFollow(props: IProps) {
  const [users, setUsers] = useState<IUser[]>()

  const getMostFollowedUsers = async () => {
    const data = await UserServices.getMostFollowedUsers()
    setUsers(data)
  }

  useEffect(() => {
    getMostFollowedUsers()
  },[])

  return (
    <div className="gap-3 p-5 max-w-[500px] min-w-[300px] flex flex-col rounded-xl shadow-lg shadow-slate-950 relative overflow-hidden">
      <h1>{props.title}</h1>
      {users?.map(user => 
      <div className="flex items-center justify-between gap-5">
        <Link to={`/profile/${user.id}`}>
          <div className="flex items-center gap-2">
            <img
              className="rounded-full w-8 h-8"
              src={user.img}
            />
            <p className="text-wrap break-words">
              {user.name}
            </p>
          </div>
        </Link>
        <p className="text-wrap break-words ">
          {user.followedBy?.length} Followers
        </p>
      </div>
      )}
    </div>
  )
}

export default MostFollow
