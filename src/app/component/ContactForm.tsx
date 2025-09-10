"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";


function Signup() {
    const router = useRouter();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // const [buttonDisable, setButtonDisable] = useState(true);
    // const [loading, setLoading] = useState(false);


    // useEffect(() => {
    //     if (user.email && user.message && user.name && user.phone) {
    //         setButtonDisable(false);
    //     } else {
    //         setButtonDisable(true);
    //     }
    // }, [user]);

    const onSignup = async () => {
        try {
            const res = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (res.ok) {
                alert("Sign-up Successful");
                router.push('/');
            } else {
                const data = await res.json();
                alert(data.error || "Sign-up Failed");
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log("Login Failed:", err.message);
                window.alert(`Login Failed: ${err.message}`);
            } else {
                console.log("Login Failed:", err);
                window.alert("Login Failed due to unknown error");
            }
        }
    };

    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100 shadow-lg p-6 animate-fadeIn">
            <div className="w-full max-w-md">
                <h1 className="text-center mb-6 text-gray-700 font-light text-3xl ">
                    We'd love to hear <span className="text-red-500 font-semibold">from you</span>. 
                </h1>
                <div className="bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-2xl text-center font-bold mb-6">Contact Us</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border p-2 rounded mb-4"
                        value={user.name}
                        onChange={handleChange}
                        name="name"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-2 rounded mb-4"
                        value={user.email}
                        onChange={handleChange}
                        name="email"
                    />
                    <input
                        type="tel"
                        placeholder="Phone number"
                        className="w-full border p-2 rounded mb-4"
                        value={user.phone}
                        onChange={handleChange}
                        name="phone"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full border p-2 rounded mb-4"
                        value={user.message}
                        onChange={handleChange}
                        name="message"
                    ></textarea>
                    <button
                        onClick={onSignup}
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
