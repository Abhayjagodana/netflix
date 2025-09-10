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

    const [buttonDisable, setButtonDisable] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user.email && user.message && user.name && user.phone) {
            setButtonDisable(false);
        } else {
            setButtonDisable(true);
        }
    }, [user]);

    const onSignup = async () => {
        try {
            setLoading(true);
            const res = await axios.post("/api", user); // ✅ Correct endpoint
            console.log("contact success", res.data);
            alert("Contact successful! Please check your email.");
            router.push("/");
        } catch (err) {
            console.error("contact failed:", err);
            if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    {loading ? "Processing..." : "Contact Us"}
                </h1>

                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border p-2 rounded mb-4"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}

                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded mb-4"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />

                <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full border p-2 rounded mb-4"
                    value={user.phone}
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />

                <textarea
                    placeholder="Message"
                    className="w-full border p-2 rounded mb-4"
                    value={user.message}
                    onChange={(e) => setUser({ ...user, message: e.target.value })}
                ></textarea>

                <button
                    onClick={onSignup}
                    disabled={buttonDisable || loading}
                    className={`w-full p-2 rounded text-white ${buttonDisable || loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    {buttonDisable ? "Fill all fields" : loading ? "Contacting..." : "Contact Us"}
                </button>

                <div className="mx-4 my-2 sm:mx-8 sm:my-3 md:mx-16 md:my-4 lg:mx-32">
                    <Link
                        href="/"
                        className="text-blue-600 hover:underline text-sm sm:text-base"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
