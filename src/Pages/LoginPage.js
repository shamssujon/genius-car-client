import React, { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import image from "../Assets/images/login/login.svg";
import { AuthContext } from "../Contexts/AuthProvider";

const LoginPage = () => {
    const { loginUser, successToast, errorToast, googleSignIn } = useContext(AuthContext);

    const handleLogIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                successToast("Logged in successfully");
            })
            .catch((error) => {
                console.error(error);
                errorToast(error.message);
            });
    };

    // google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                successToast("Logged in with google");
            })
            .catch((error) => {
                console.error(error);
                errorToast(error.message);
            });
    };
    return (
        <section className="py-10">
            <div className="container">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div className="rounded-lg border p-8 md:p-12 lg:order-2 lg:p-20">
                        <h2 className="mb-8 text-center text-3xl font-bold lg:text-4xl">Log in</h2>
                        <form onSubmit={handleLogIn} className="space-y-4">
                            <div className="form-control w-full">
                                <label className="label font-semibold" htmlFor="email">
                                    <span>Email</span>
                                </label>
                                <input
                                    required
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Your email"
                                    className="input-bordered input w-full"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label font-semibold" htmlFor="password">
                                    <span>Password</span>
                                </label>
                                <input
                                    required
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Your password"
                                    className="input-bordered input w-full"
                                />
                            </div>
                            <div className="grid pt-6">
                                <button className="btn-primary btn">Log in</button>
                            </div>
                        </form>
                        <div className="mt-8 text-center">
                            <p>Or continue with</p>
                            <div className="mt-4 flex items-center justify-center gap-2">
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="btn-ghost btn-circle btn bg-gray-100">
                                    <FcGoogle className="h-6 w-6" />
                                </button>
                                <button className="btn-ghost btn-circle btn bg-gray-100 text-[#1877F2]">
                                    <FaFacebookF className="h-6 w-6" />
                                </button>
                                <button className="btn-ghost btn-circle btn bg-gray-100 text-[#0A66C2]">
                                    <FaLinkedinIn className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                        <p className="mt-8 text-center">
                            Do not have an account?{" "}
                            <Link to={"/signup"} className="font-semibold text-primary">
                                Sign up
                            </Link>
                        </p>
                    </div>

                    <div className="lg:order-1">
                        <img src={image} alt="" className="mx-auto max-w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
