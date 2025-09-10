"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero({ title, ImageUrl }: { title: string; ImageUrl: string }) {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200 overflow-hidden">
      <div className="mx-auto flex max-w-7xl h-full flex-col items-center justify-center px-6 py-16 md:flex-row">
        {/* Left side: text */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-gray-700">
            From award-winning dramas to blockbuster action movies, we&apos;ve
            got you covered. Browse our selection of the latest and greatest
            movies, and find your new favorite today.
          </p>
          <Link
            href="/movie"
            className="mt-6 inline-block rounded-full bg-black px-6 py-2 text-white shadow hover:bg-white hover:text-black transition"
          >
            Explore Movies
          </Link>
        </div>

        {/* Right side: image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src={ImageUrl}
            alt="Movie Illustration"
            width={400}
            height={400}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      {/* Smooth Single Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="w-full h-64"
        >
          <path
            d="M0,96 C360,160 1080,32 1440,96 L1440,200 L0,200 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
