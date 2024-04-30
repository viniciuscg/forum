import { useState } from "react"
import { UserServices } from "../../Services/User/userServices"
import { useNavigate } from "react-router-dom"
import { RiProgress4Fill } from "react-icons/ri"

function Login() {
  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const [req, setReq] = useState(false)
  const navigate = useNavigate()

  const singUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setReq(true)
    UserServices.login({
      email,
      password,
    })
    setReq(false)
    navigate('/')
  }

  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <form onSubmit={singUp} className="bg-transparent text-center p-8 rounded shadow-slate-950 shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign-in</h2>
        <input
          type="email"
          placeholder="E-mail"
          className="w-full border p-2 mb-2 bg-transparent"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 bg-transparent"
          onChange={e => setPassword(e.target.value)}
        />
        {req ?
        <button disabled type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          <RiProgress4Fill />
        </button>
        :
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
        }
      </form>
    </div>
  )
}

export default Login