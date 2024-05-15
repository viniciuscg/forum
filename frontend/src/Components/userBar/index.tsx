import { AiFillHome } from "react-icons/ai"
import { FaSearch, FaUserAlt, FaUserPlus } from "react-icons/fa"
import { GoSignIn, GoSignOut } from "react-icons/go"
import { useUserContext } from "../../Context/userContext";
import UserBarItems from "./userBarItems";

function UserBar() {
  const { isUserLogged, user } = useUserContext()

  const itemsNotLogged = [
    {
      icon: <FaUserPlus/>,
      title: "Sign-Up",
      route: "/sign-up"
    },
    {
      icon: <GoSignIn/>,
      title: "Sign-In",
      route: "/sign-in"
    },
  ]

  const items = [
    {
      icon: <AiFillHome/>,
      title: "Home",
      route: "/"
    },
    {
      icon: <FaSearch/>,
      title: "Explore",
      route: "/search"
    }
  ]

  const logout = () => {
    localStorage.removeItem('token')
  }

  const itemsLogged = [
    {
      icon: <FaUserAlt />,
      title: "Profile",
      route: `/profile/${user?.id}`
    },
    {
      icon: <GoSignOut/>,
      title: "Sign-Out",
      route: "/home",
      action: logout
    },
  ]

  return (
    <div className="p-2 pt-10 rounded-sm min-w-[200px] flex space-y-4 text-white">
      <div className="flex flex-col gap-2">
        {isUserLogged &&
        <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-full border-4 border-white"
              src={user?.img}
            />
            <p>{user?.name}</p>
        </div>
        }
        {items.map(item => 
            <UserBarItems icon={item.icon} route={item.route} title={item.title} />
        )}
        {isUserLogged &&
          itemsLogged.map(item => 
            <UserBarItems icon={item.icon} route={item.route} title={item.title} action={item.action}/>
          )
        }
        {!isUserLogged &&
          itemsNotLogged.map(item => 
            <UserBarItems icon={item.icon} route={item.route} title={item.title}/>
          )
        }
      </div>
    </div>
  )
}
export default UserBar
