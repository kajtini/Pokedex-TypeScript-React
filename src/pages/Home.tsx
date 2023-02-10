import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-self-center">
      <h1 className="text-5xl text-center sm:text-7xl mb-5">
        Welcome to the Pokedex
      </h1>
      <p className="text-center opacity-80 text-lg sm:text-2xl max-w-md mx-auto mb-5 sm:leading-10">
        Where you can find desired information about your favourite pokemon.
      </p>

      <Link
        to="/pokemon"
        className="bg-secondary bg-opacity-10 max-w-[280px] py-4 text-2xl rounded-lg mx-auto w-full text-center"
      >
        Discover
      </Link>
    </div>
  );
}

export default Home;
