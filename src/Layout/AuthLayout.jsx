
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';

const AuthLayout = () => {
  return (
    <div className='container mx-auto'>

        <Navber></Navber>
        Authentication page Layout  
      <Outlet></Outlet>
    </div>
  );
}

export default AuthLayout;
