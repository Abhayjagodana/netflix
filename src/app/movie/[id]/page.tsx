import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>; // ✅ params is a Promise
}

interface MovieCardProps {
  id: string;
  title: string;
  release_year: number;
  description: string;
  backgroundImage: string;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;

  const url = `https://netflix-movies-and-tv-shows1.p.rapidapi.com/?ids=${id}`;
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': '2a4614a866mshc7d40b074f1feb2p13cfbcjsn45098bf7bb5a',
      'x-rapidapi-host': 'netflix-movies-and-tv-shows1.p.rapidapi.com',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  };

  const res = await fetch(url, options);
  const main_data = await res.json();

  console.log("API response:", main_data);

  // ✅ Type assertion or assignment
  const movie: MovieCardProps = main_data;

  const { backgroundImage, title, release_year, description } = movie;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto mt-10">
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">
          {title} <span className="text-sm text-gray-500">({release_year})</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>

        {/* <Link href={`/movie/${show_id}`} passHref>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black transition-colors duration-300">
            View Details
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default page;


