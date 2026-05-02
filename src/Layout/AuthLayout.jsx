
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';

const AuthLayout = () => {
  return (
    <div className='container mx-auto h-screen bg-[#E7E7E7]'>

        <Navber></Navber>
        Authentication page Layout  
      <Outlet></Outlet>
    </div>
  );
}

export default AuthLayout;
