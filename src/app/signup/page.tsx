"use client";
import { useRouter } from "next/navigation";
import { root } from "postcss";
import { useState } from "react";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  // if (!/^[A-Za-z\s]+$/.test(user.fullname)) {
  //     alert("Full name can only contain letters and spaces");
  //     return false;
  //   }

  //    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
  //     alert("Invalid email address");
  //     return false;
  //   }

  //   if (!/^\d{10}$/.test(user.phone)) {
  //     alert("Phone number must be exactly 10 digits");
  //     return false;
  //   }

  //   if (!/^\d{10}$/.test(user.phone)) {
  //     alert("Phone number must be exactly 10 digits");
  //     return false;
  //   }
  //   if (user.password !== user.confirmPassword) {
  //     alert("Passwords do not match");
  //     return false;
  //   }
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (res.ok) {
        alert("Sign-up Successful");
        router.push('/login');
      } else {
        const data = await res.json();
        alert(data.error || "Sign-up Failed");
      }
    } catch (error) {
      console.log("Sign-up Failed", error);
      alert("Sign-up Failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-300 to-pink-500 animate-fadeIn">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 animate-bounce">
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        value={user.fullname}
          onChange={handleChange}
          name="fullname"
       />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          value={user.email}
          onChange={handleChange}
          name="email"
      
       />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          value={user.phone}
          onChange={handleChange}
          name="phone"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          value={user.password}
          onChange={handleChange}
          
          name="password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          value={user.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        
        />

        <button className="w-full p-3 rounded-lg text-white font-semibold bg-purple-600 hover:bg-purple-700 transition-colors"
          onClick={signup}
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
export default SignupPage;