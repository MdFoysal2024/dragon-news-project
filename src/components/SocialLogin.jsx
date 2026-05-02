import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"


const SocialLogin = () => {
  return (
    <div>
      <h3 className="text-left font-semibold pb-6 text-2xl ">Login with</h3>

      <div className=" flex flex-col gap-2">
        <button className="btn "><FcGoogle className="text-2xl"/> Login with Google</button>
        <button className="btn "><FaGithub className="text-2xl"/>Login with Github</button>
      </div>
    </div>
  )
}

export default SocialLogin
