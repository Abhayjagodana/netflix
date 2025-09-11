"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
    const router = useRouter();

    useEffect(() => {
        const logout = async () => {
            try {
                const res = await fetch('/api/logout', {
                    method: 'POST',
                });

                if (res.ok) {
                    console.log("Logged out successfully");
                    router.push('/login'); // Redirect to login page
                } else {
                    console.error("Logout failed");
                }
            } catch (error) {
                console.error("Logout error:", error);
            }
        };

        logout();
    }, [router]);

    return (
        <div className="text-center mt-20 text-gray-700">
            Logging out...
        </div>
    );
};

export default LogoutPage;
