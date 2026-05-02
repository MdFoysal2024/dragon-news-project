import { Link } from "react-router-dom"


const Login = () => {

    const handleLogin = event => {
       event.preventDefault()
        console.log(' handle Login')
    }


    return (
        <div className='container mx-auto items-center md:my-24 justify-center  w-full flex flex-col md:flex-row lg:flex-row '>





            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div>
                    <h2 className=' text-xl md:text-xl lg:text-2xl font-bold text-center pt-6'>
                        <span className="text-gray-600"> Login Your Account </span>

                    </h2>
                </div>

                <form
                    onSubmit={handleLogin}

                    className="card-body">
                    <fieldset className="fieldset">
                        <label className="label text-gray-800 font-semibold">Email</label>
                        <input type="email" name="email" className="input  bg-red-100 border-0" placeholder="Enter your email address" />

                        <label className="label text-gray-800 font-semibold">Password</label>
                        <input type="password" name="password" className="input  bg-red-100 border-0" placeholder="Enter your password" />

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
