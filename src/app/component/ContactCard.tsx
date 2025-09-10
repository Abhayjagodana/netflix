import { Mail, MessageSquareText, MessagesSquare } from "lucide-react";
import Link from "next/link";

export default function ContactCard() {
  return (
    <div className="flex flex-wrap justify-center items-start gap-6 bg-gray-100 p-6">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-64 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
        <div className="bg-red-100 p-4 rounded-full">
          <Mail className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-800">Email</h3>
        <div className="mt-4 flex flex-col items-center space-y-2 text-center">
          <p>Monday to Friday Expected</p>
          <p>Response Time: 72 hours</p>
          <Link href="#" className="text-sm text-blue-600 hover:underline">
            Send Email
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-64 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
        <div className="bg-red-100 p-4 rounded-full">
          <MessageSquareText className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-800">Live Chat</h3>
        <div className="mt-4 flex flex-col items-center space-y-2 text-center">
          <p>Weekdays: 9AM – 6PM ET</p>
          <p>Weekends: 9AM – 5PM ET</p>
          <Link href="#" className="text-sm text-blue-600 hover:underline">
            Chat Now
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-64 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
        <div className="bg-red-100 p-4 rounded-full">
          <MessagesSquare className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-800">Community Forum</h3>
        <div className="mt-4 flex flex-col items-center space-y-2 text-center">
          <p>Weekdays: 9AM – 6PM ET</p>
          <p>Weekends: 9AM – 5PM ET</p>
          <Link href="#" className="text-sm text-blue-600 hover:underline">
            Ask The Community
          </Link>
        </div>
      </div>
    </div>
  );
}
