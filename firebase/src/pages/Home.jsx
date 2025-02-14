import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase';

const Home = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userCredential) => {
            if (userCredential) {
                setUser(userCredential.displayName);
            } else {
                setUser("");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="home-container">
            Welcome {user ? user : "Guest"}!
        </div>
    );
};

export default Home;