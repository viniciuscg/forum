import { AiFillHome } from "react-icons/ai"
import { FaSearch, FaUserAlt, FaUserPlus } from "react-icons/fa"
import { GoSignIn, GoSignOut } from "react-icons/go"
import { useUserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";

const itemsNotLogged = [
  {
    icon: <FaUserPlus/>,
    title: "Sign-Up",
    key: "/sign-up"
  },
  {
    icon: <GoSignIn/>,
    title: "Sign-In",
    key: "/sign-in"
  },
]

const items = [
  {
    icon: <AiFillHome/>,
    title: "Home",
    key: "/"
  },
  {
    icon: <FaSearch/>,
    title: "Explore",
    key: "/search"
  }
]

const itemsLogged = [
  {
    icon: <FaUserAlt />,
    title: "Profile",
    key: "/profile"
  },
  {
    icon: <GoSignOut/>,
    title: "Sign-Out",
    key: "/home",
    function: function logout(bool: boolean) {
      localStorage.removeItem('token')
      console.log("teste");
      return bool
    }
  },
];

interface IItems {
    icon: JSX.Element;
    title: string;
    key: string;
    function?: boolean
}

function UserBar() {
  const { isUserLogged, user } = useUserContext()
  const navigation = useNavigate();

  const navigate = (item: IItems) => {
    item.function(true)
    navigation(`${item.key}`)
  }

  return (
    <div className="p-2 pt-10 rounded-sm min-w-[200px] flex space-y-4 text-white">
      <div>
        {isUserLogged &&
        <div className="flex items-center gap-2">
            <img
              className="rounded-full w-8"
              src={user?.img}
              alt=""
            />
            <p>{user?.name}</p>
        </div>
        }
        {items.map(item => 
          <div onClick={() => navigate(item)} className="flex items-center gap-2 hover:bg-gray-800 rounded-full cursor-pointer p-2">
            {item.icon}
            <p>{item.title}</p>
          </div>
        )}
        {isUserLogged &&
          itemsLogged.map(item => 
          <div onClick={() => navigate(item)} className="flex items-center gap-2 hover:bg-gray-800 rounded-full cursor-pointer p-2">
            {item.icon}
            <p>{item.title}</p>
          </div>
          )
        }
        {!isUserLogged &&
          itemsNotLogged.map(item => 
            <div onClick={() => navigate(item)} className="flex items-center gap-2 hover:bg-gray-800 rounded-full cursor-pointer p-2">
              {item.icon}
              <p>{item.title}</p>
            </div>
          )
        }
      </div>
    </div>
  );
}
export default UserBar;
