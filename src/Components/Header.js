import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { AuthContext } from "../Contexts/AuthProvider";

const Header = () => {
    const menuItems = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/contact" },
    ];

    const { user, logOut, successToast } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                successToast("Logged out!");
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <header className="border-b">
            <div className="container navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn-ghost btn lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
                            {menuItems.map((menuItem, index) => (
                                <li key={index}>
                                    <NavLink className="font-semibold" to={menuItem.path}>
                                        {menuItem.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to={"/"}>
                        <img
                            src={logo}
                            alt=""
                            className="max-h-[60px] max-w-[100px] md:max-h-[80px]"
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems.map((menuItem, index) => (
                            <li key={index}>
                                <NavLink className="font-semibold" to={menuItem.path}>
                                    {menuItem.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <button className="btn-outline btn-circle btn">
                                <img
                                    src={user?.photoURL}
                                    alt=""
                                    className="h-full w-full rounded-full object-cover"
                                />
                            </button>
                            <div
                                tabIndex={0}
                                className="dropdown-content rounded-box w-52 bg-base-100 p-2 shadow">
                                <p className="px-2 pt-2">Hello, {user?.email}</p>
                                <div className="divider before:hidden after:h-[1px]"></div>
                                <ul className="menu">
                                    <li>
                                        <Link>Profile</Link>
                                    </li>
                                    <li>
                                        <Link>Orders</Link>
                                    </li>
                                    <li>
                                        <Link>Manage Orders</Link>
                                    </li>
                                    <li className="divider before:hidden after:hidden"></li>
                                    <li>
                                        <button onClick={handleLogOut}>Sign Out</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Link to={"/signup"} className="btn-outline btn-primary btn">
                            Sign Up
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
