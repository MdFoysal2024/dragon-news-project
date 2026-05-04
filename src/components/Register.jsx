
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleRegister = e => {
        e.preventDefault()
        console.log(' handle Register');


        // const form = e.target;

        // const name = form.name.value;
        // const photo_url = form.photo_url.value;
        // const email = form.email.value;
        // const password = form.password.value;

        // console.log(name, photo_url, email, password)

        // navigate('/');

        // new form functonality-------->
        const form = new FormData(e.target)

        const name = form.get("name");
        const photo_url = form.get("photo_url");
        const email = form.get("email");
        const password = form.get("password");

        console.log(name, photo_url, email, password)
        console.log({name, photo_url, email, password})
    }


    return (
        <div className='container mx-auto items-center md:my-24 justify-center  w-full flex flex-col md:flex-row lg:flex-row '>


            <div className="card bg-base-100 rounded-none w-full max-w-lg shrink-0 shadow-2xl">
                <div>
                    <h2 className=' text-xl font-bold text-center pt-8'>
                        <span className="text-gray-600 "> Register  Your Account </span>

                    </h2>
                </div>

                <form
                    onSubmit={handleRegister}

                    className="card-body">
                    <fieldset className="fieldset">

                        <label className="label text-gray-800 font-semibold">Your Name</label>
                        <input type="text" name="name" className="input  w-full bg-red-100 border-0" placeholder="Enter your name" />

                        <label className="label text-gray-800 font-semibold">Photo URL</label>
                        <input type="text" name="photo_url" className="input w-full bg-red-100 border-0" placeholder="Enter your photo_url" />

                        <label className="label text-gray-800 font-semibold">Email</label>
                        <input type="email" name="email" className="input w-full bg-red-100 border-0" placeholder="Enter your email address" />

                        <label className="label text-gray-800 font-semibold">Password</label>
                        <input type="password" name="password" className="input w-full bg-red-100 border-0" placeholder="Enter your password" />

                        <div><a className="link link-hover text-gray-800 font-semibold">Forgot password?</a></div>


                        <div className="form-control mt-6">
                            <input type="submit" className="btn w-full bg-[#333333] text-white border-none text-lg hover:bg-red-800" value='Register' />
                        </div>
                    </fieldset>
                </form>

                <p className="text-center pb-6">Already Have An Account ?<small className="text-red-600 font-medium">
                    <Link to='/auth/login' >Login</Link>
                </small></p>

            </div>



        </div>
    );
}

export default Register;
