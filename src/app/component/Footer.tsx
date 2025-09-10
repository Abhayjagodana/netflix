"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side: Name or Brand */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold">MyWebsite</h2>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Right side: Social Media Icons and Info */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.7-3.5 15 15 0 0 1 2.3.2v2.6h-1.3c-1 0-1.3.6-1.3 1.3v1.7H17l-.5 3h-2v7A10 10 0 0 0 22 12"/>
              </svg>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1a9.1 9.1 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.7 4.13A12.8 12.8 0 0 1 2 3s-4 9 5 13a13 13 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.403a4.92 4.92 0 0 1 1.76 1.04 4.92 4.92 0 0 1 1.04 1.76c.163.46.347 1.26.403 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.04 1.76 4.92 4.92 0 0 1-1.76 1.04c-.46.163-1.26.347-2.43.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.76-1.04 4.92 4.92 0 0 1-1.04-1.76c-.163-.46-.347-1.26-.403-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.04-1.76 4.92 4.92 0 0 1 1.76-1.04c.46-.163 1.26-.347 2.43-.403C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.735 0 8.332.013 7.052.072 5.773.13 4.842.333 4.042.644a7.12 7.12 0 0 0-2.57 1.68A7.12 7.12 0 0 0 .644 4.042C.333 4.842.13 5.773.072 7.052.013 8.332 0 8.735 0 12c0 3.265.013 3.668.072 4.948.058 1.279.261 2.21.572 3.01a7.12 7.12 0 0 0 1.68 2.57 7.12 7.12 0 0 0 2.57 1.68c.8.311 1.731.514 3.01.572C8.332 23.987 8.735 24 12 24s3.668-.013 4.948-.072c1.279-.058 2.21-.261 3.01-.572a7.12 7.12 0 0 0 2.57-1.68 7.12 7.12 0 0 0 1.68-2.57c.311-.8.514-1.731.572-3.01.059-1.28.072-1.683.072-4.948s-.013-3.668-.072-4.948c-.058-1.279-.261-2.21-.572-3.01a7.12 7.12 0 0 0-1.68-2.57 7.12 7.12 0 0 0-2.57-1.68c-.8-.311-1.731-.514-3.01-.572C15.668.013 15.265 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
              </svg>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-gray-600">
            <p>Email: info@mywebsite.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
