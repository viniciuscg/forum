import NoData from "../../../../Components/noData"
import { IUser } from "../../../../Services/User/IUser"
import { useNavigate } from "react-router-dom";

interface IProps {
  users: IUser[]
  onClose(): void
  getUserById(id: number): void
}


function FollowsContent(props: IProps) {
  const navigation = useNavigate()
  
  const goToProfile = (id: number) => {
    navigation(`/profile/${id}`)
    props.onClose()
  }

  return(
    <div className="flex gap-2 flex-col items-center p-10">
      {props.users && props.users.length > 0 ? 
        props.users.map((user) => (
          <div onClick={() => goToProfile(user.id)} className="flex items-center gap-4">
            <img className="w-10 h-10 rounded-full border-4 border-white" src={user.img} />
            <h1>{user.name}</h1>
          </div>
        ))
      : 
        <NoData />
      }
    </div>
  )
}

export default FollowsContent