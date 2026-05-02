import FindUs from "../FindUs"
import SocialLogin from "../SocialLogin"

import img1 from '../../assets/swimming.png'
import img2 from '../../assets/class.png'
import img3 from '../../assets/playground.png'

const RightNavber = () => {
  return (
    <div>

      <SocialLogin></SocialLogin>
      <FindUs></FindUs>

      <div className="bg-gray-100 my-6">
        <h3 className=" font-semibold  text-left text-2xl pl-4  py-6">Q-Zone</h3>
        <div className="flex flex-col gap-8 p-6">
          <img src={img1 } alt="" />
          <img src={ img2} alt="" />
          <img src={ img3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default RightNavber
