import MovieCard from "../component/MovieCard";

interface Movie {
  show_id: string;
  title: string;
  release_year: number;
  description: string;
  backgroundImage: string | { url: string } | null;
}

interface ApiResponse {
  result: {
    current_page: number;
    data: Movie[];
    from: number;
    to: number;
    per_page: number;
    total: number;
  };
}

const Moviepage = async () => {
  const encodedParams = new URLSearchParams();

const url = 'https://netflix-movies-and-tv-shows1.p.rapidapi.com/list';
const options = {
  method: 'POST',
  headers: {
    'x-rapidapi-key': '2a4614a866mshc7d40b074f1feb2p13cfbcjsn45098bf7bb5a',
    'x-rapidapi-host': 'netflix-movies-and-tv-shows1.p.rapidapi.com',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: encodedParams
};

  try {
  const res = await fetch(url, options);
  const result:ApiResponse = await res.json();
  console.log("API Response:", result);

  if (!result.result || !result.result.data) {
    return (
      <div>
        <h1>Error loading movies</h1>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    );
  }

  const data: Movie[] = result.result.data;

  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8">All Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((curElem) => (
            <MovieCard
              key={curElem.show_id}
              show_id={curElem.show_id}
              title={curElem.title}
              release_year={curElem.release_year}
              description={curElem.description}
              backgroundImage={
                typeof curElem.backgroundImage === 'string'
                  ? curElem.backgroundImage
                  : curElem.backgroundImage?.url || ''
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
} catch (error) {
  console.error("Fetch error:", error);
  return (
    <div>
      <h1>Network Error</h1>
      <pre>{error instanceof Error ? error.message : String(error)}</pre>
    </div>
  );
}

}

export default Moviepage;
