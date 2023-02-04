import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { PokemonDetailed, PageData, Pagination } from "./types";
import Card from "./components/Card";
import Search from "./components/Search";
import PokemonList from "./components/PokemonList";
import { CircleLoader } from "react-spinners";
import PokemonNotFound from "./components/PokemonNotFound";

function App() {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?limit=9";

  const [pagination, setPagination] = useState<Pagination>({
    currentPageNumber: 1,
    allPages: 10,
    currentPageUrl: BASE_URL,
  });
  const [currentPageData, setCurrentPageData] = useState<PageData | null>(null);
  const [allPokemonDetailed, setAllPokemonDetailed] =
    useState<Array<PokemonDetailed> | null>(null);
  const [search, setSearch] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const [filteredPokemon, setFilteredPokemon] =
    useState<PokemonDetailed | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(pagination.currentPageUrl);
        setCurrentPageData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [pagination.currentPageUrl]);

  useEffect(() => {
    async function fetchData() {
      if (currentPageData) {
        try {
          const urls = currentPageData.results.map((pokemon) => pokemon.url);
          const response = await Promise.all(urls.map((url) => axios.get(url)));

          setAllPokemonDetailed(response.map((res) => res.data));
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchData();
  }, [currentPageData]);

  useEffect(() => {
    async function fetchData() {
      if (submitValue) {
        try {
          const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${submitValue.toLowerCase()}`
          );

          setFilteredPokemon(res.data);
        } catch (error) {
          setFilteredPokemon(null);
          console.error(error);
        }
      } else {
        setFilteredPokemon(null);
      }
    }

    fetchData();
  }, [submitValue]);

  function returnHomePage() {
    setFilteredPokemon(null);
    setSubmitValue("");
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-primary font-primary text-white pb-10">
      {/* Remove pb-10 later in the upper div */}
      <Navbar />
      <div className="max-w-[1200px] w-full px-8 ">
        <Search
          search={search}
          setSearch={setSearch}
          setSubmitValue={setSubmitValue}
          handleHomePage={returnHomePage}
        />

        {filteredPokemon ? (
          <Card pokemon={filteredPokemon} />
        ) : (
          allPokemonDetailed &&
          !submitValue && (
            <PokemonList
              BASE_URL={BASE_URL}
              allPokemonDetailed={allPokemonDetailed}
              currentPageData={currentPageData}
              pagination={pagination}
              setPagination={setPagination}
            />
          )
        )}

        {!filteredPokemon && submitValue && (
          <PokemonNotFound submitValue={submitValue} />
        )}
      </div>
    </div>
  );
}

export default App;
