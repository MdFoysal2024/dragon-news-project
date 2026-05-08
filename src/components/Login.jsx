import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signIn, setUser } = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault()
        console.log(' handle Login');


        // const form = event.target;
        // const email = form.email.value;
        // const password = form.password.value;
        // console.log(email, password)

        // navigate('/')



        // New Formula---------->
        const form = new FormData(e.target)

        const email = form.get("email");
        const password = form.get("password");

        console.log(email, password)
        console.log({ email, password })



        signIn(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user);
                navigate('/')
            })
            .catch((error) => {
                // const errorCode = error.code;
                //const errorMessage = error.message;
                //console.log(errorCode, errorMessage);

                alert(error.code);
            });


    }


    return (
        <div className='container mx-auto items-center md:my-24 justify-center  w-full flex flex-col md:flex-row lg:flex-row '>


            <div className="card bg-base-100 rounded-none w-full max-w-lg shrink-0 shadow-2xl">
                <div>
                    <h2 className=' text-xl font-bold text-center pt-8'>
                        <span className="text-gray-600 "> Login Your Account </span>

                    </h2>
                </div>

                <form
                    onSubmit={handleLogin}

                    className="card-body">
                    <fieldset className="fieldset">

                        <label className="label text-gray-800 font-semibold">Email</label>
                        <input type="email" name="email" className="input w-full  bg-red-100 border-0" placeholder="Enter your email address" />

                        <label className="label text-gray-800 font-semibold">Password</label>
                        <input type="password" name="password" className="input w-full  bg-red-100 border-0" placeholder="Enter your password" />

                        <div><a className="link link-hover text-gray-800 font-semibold">Forgot password?</a></div>


                        <div className="form-control mt-6">
                            <input type="submit" className="btn w-full bg-[#333333] text-white border-none text-lg hover:bg-red-800" value='Login' />
                        </div>
                    </fieldset>
                </form>

                <p className="text-center pb-6">Dont’t Have An Account ?<small className="text-red-600 font-medium">
                    <Link to='/auth/register' >Register</Link>
                </small></p>

            </div>



        </div>







    )
}

export default Login
