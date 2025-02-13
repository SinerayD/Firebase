import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Navbar = () => {

    const navigate = useNavigate();

    const logout = async () => {
        toast.success("Signing Out");
        setTimeout(() => {
            signOut(auth);
            navigate("/auth");
        }, 2500);

    }
    return (
        <div className='navbar-container' >
            <div className='navbar-left' >FIREBASE</div>
            <div onClick={logout} className='navbar-right' >Sign out</div>
        </div>
    )
}

export default Navbar