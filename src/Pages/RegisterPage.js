import React, { useContext, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../Assets/images/login/login.svg";
import { AuthContext } from "./../Contexts/AuthProvider";

const RegisterPage = () => {
    const { createUser, successToast, errorToast, googleSignIn } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;

        // Password validation
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{4,20}$/;

        if (!passwordRegex.test(password)) {
            setPasswordError("Please use Strong Password");
            return false;
        } else {
            setPasswordError(null);
        }

        // Create user
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                successToast("User created successfully!");
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

                // Navigate user back to where they came from
                navigate(from, { replace: true });
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
                        <h2 className="mb-8 text-center text-3xl font-bold lg:text-4xl">Sign Up</h2>
                        <form onSubmit={handleSignUp} className="space-y-4">
                            <div className="form-control w-full">
                                <label className="label font-semibold" htmlFor="name">
                                    <span>Name</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="input-bordered input w-full"
                                />
                            </div>
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
                                    <span>Choose Password</span>
                                </label>
                                <input
                                    required
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Your password"
                                    className="input-bordered input w-full"
                                />
                                {passwordError && (
                                    <label className="label">
                                        <span className="label-text-alt">{passwordError}</span>
                                    </label>
                                )}
                            </div>
                            <div className="grid pt-6">
                                <button className="btn-primary btn">Sign Up</button>
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
                            Already have an account?{" "}
                            <Link to={"/login"} className="font-semibold text-primary">
                                Login
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

export default RegisterPage;
