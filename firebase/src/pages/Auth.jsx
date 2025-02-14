import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(response);
            const token = credential.accessToken;
            const user = response.user;
            if (user) {
                navigate("/");
            }
        }

        catch (error) {
            toast.error(error.message);
        }
    }


    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = response.user;
            if (user)
                navigate("/");

        }
        catch (error) {
            toast.error("Log In is unsuccessful");
        }
    }

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user;
            if (user) {
                toast.success("User created successfully");
                setEmail('');
                setPassword('');
            }
        }
        catch (error) {

            toast.error("Enter email and password in order to sign up");
        }
    }

    return (
        <div className="auth">
            <h3>Sign In / Sign Up</h3>
            <div>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email address.." />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password.." />
            </div>
            <div>
                <button onClick={loginWithGoogle} > <FcGoogle />Sign Up With Google</button>
                <button onClick={login} >Log In</button>
                <button onClick={register} >Sign Up</button>
            </div>
        </div>
    );
};

export default Auth;
