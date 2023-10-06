import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget) ;
        console.log(form.get('email'));

    }


    return (
        <div onSubmit={handleLogin}  className="space-y-10">
            <Navbar></Navbar>
            <h2 className="text-3xl font-semibold text-center">Login your account</h2>
            {/* Login page setup */}
            <form  className="lg:w-1/2 md:w-3/4 mx-auto border p-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center">Do not Have An Account ? <Link to={'/register'} className="hover text-lg text-red-600"> Register</Link></p>
        </div>
    );
};

export default Login;