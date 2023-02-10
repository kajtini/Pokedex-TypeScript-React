import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Pokemon/Card";
import PokemonList from "../components/PokemonList";
import PokemonNotFound from "../components/PokemonNotFound";
import Search from "../components/Search";
import { PokemonDetailed, PageData, Pagination } from "../types";
import { ClipLoader } from "react-spinners";

function Pokedex() {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?limit=9";

  const [pagination, setPagination] = useState<Pagination>({
    currentPageNumber: 1,
    allPages: 12,
    currentPageUrl: BASE_URL,
  });
  const [currentPageData, setCurrentPageData] = useState<PageData | null>(null);
  const [allPokemonDetailed, setAllPokemonDetailed] =
    useState<Array<PokemonDetailed> | null>(null);
  const [search, setSearch] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const [filteredPokemon, setFilteredPokemon] =
    useState<PokemonDetailed | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
          setIsLoading(true);
          const urls = currentPageData.results.map((pokemon) => pokemon.url);
          const response = await Promise.all(urls.map((url) => axios.get(url)));
          setIsLoading(false);
          setAllPokemonDetailed(response.map((res) => res.data));
        } catch (error) {
          setIsLoading(false);
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
          setIsLoading(true);
          const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${submitValue.toLowerCase()}`
          );
          setIsLoading(false);
          setFilteredPokemon(res.data);
        } catch (error) {
          setIsLoading(false);
          setFilteredPokemon(null);
          console.error(error);
        }
      } else {
        setIsLoading(false);
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
    <div className="justify-self-stretch">
      <Search
        search={search}
        setSearch={setSearch}
        setSubmitValue={setSubmitValue}
        handleHomePage={returnHomePage}
      />

      {isLoading ? (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <ClipLoader size={150} color="white" loading={true} />
        </div>
      ) : filteredPokemon ? (
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

      {!filteredPokemon && submitValue && !isLoading && (
        <PokemonNotFound submitValue={submitValue} />
      )}
    </div>
  );
}

export default Pokedex;
