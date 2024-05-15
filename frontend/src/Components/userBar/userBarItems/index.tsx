import { useNavigate } from "react-router-dom";

interface IProps {
  icon: JSX.Element
  title: string
  route: string
  action?: () => void
}

function UserBarItems(props: IProps) {

  const navigation = useNavigate()

  const handleClick = (item: IProps) => {
    if(item.action) item.action()
    navigation(`${item.route}`)
  }

  return(
    <div onClick={() => handleClick(props)} className="flex items-center gap-2 hover:bg-gray-800 rounded-full cursor-pointer p-2">
      {props.icon}
      <p>{props.title}</p>
    </div>
  )
}

export default UserBarItems