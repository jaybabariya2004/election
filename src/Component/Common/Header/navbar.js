import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import Cookies from 'cookies';;
import Swal from 'sweetalert2';;

function Navbar({ data }) {
    const handleRemove = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, logout!",
            cancelButtonText: "No, cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                Cookies.remove("role");
                Cookies.remove("name");
                Cookies.remove("_id");
                Cookies.remove("profile");
                window.location = "/login";
            }
        })
    }


    return (
        <>
            <nav className='main-nav'>
                <div className='nav'>
                    <div className='container'>
                        <img src='voting.png' />
                        <Link to='/' onClick={handleRemove} className='logina'>Log Out</Link>
                    </div>
                </div>
            </nav>

            <nav className="navbar-primary">
                <ul className="navbar-primary-menu">
                    {data?.map((val) => {
                        return (
                            <li>
                                <Link to={`${val.path}`} className="glyphicon glyphicon-list-alt nav-label">{val.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar