"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };


    const onLoginPage = async () => {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await res.json();

            if (res.ok) {
                alert("Login Successful!");
                router.push('/movie');
            } else {
                alert(data.error || "Login Failed");
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-blue-200 to-purple-300 animate-fadeIn">
            <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md transform transition-all duration-500 hover:scale-105">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 animate-bounce">
                    Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    value={user.email}
                    onChange={handleChange}
                    name="email"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    value={user.password}
                    onChange={handleChange}
                    name="password"
                />

                <button className="w-full p-3 rounded-lg text-white font-semibold bg-green-600 hover:bg-green-700 transition-colors"
                    onClick={onLoginPage}

                >
                    Login
                </button>
                <p className="mt-4 text-center">
                    Don&apos;t have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
                </p>
            </div>

        </div>
    );
};

export default LoginPage;
