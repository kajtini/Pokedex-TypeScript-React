import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PokemonDetailed, Location } from "../../types";
import LocationList from "./LocationList";
import Measurements from "./Measurements";
import PokemonTypes from "./PokemonTypes";
import StatsTable from "./StatsTable";
import AbilitiesList from "./AbilitiesList";
import GoBackBtn from "./GoBackBtn";

function Pokemon() {
  const [pokemon, setPokemon] = useState<PokemonDetailed | null>(null);
  const [locationEncounters, setLocationEncounters] =
    useState<Array<Location> | null>(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${location.state.name}`
        );

        setPokemon(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (pokemon) {
        const res2 = await axios.get(pokemon.location_area_encounters);

        setLocationEncounters(res2.data);
      }
    }

    fetchData();
  }, [pokemon]);

  const formatDashedString = (text: string) =>
    text
      .split("-")
      .map((word) => word.slice(0, 1).toUpperCase().concat(word.slice(1)))
      .join(" ");

  return (
    <>
      {pokemon && (
        <div className="flex flex-col items-center w-full mx-auto ">
          <GoBackBtn />
          <div className="w-full max-w-3xl flex flex-col gap-10">
            <div className="sm:justify-self-center">
              <div className="flex flex-col items-center gap-6">
                <img
                  src={pokemon?.sprites.other.dream_world.front_default}
                  alt="pokemon image"
                  className="h-64 sm:h-80"
                />
                <h2 className="text-5xl">{location.state.nameVisible}</h2>
                <PokemonTypes types={pokemon.types} />
                <Measurements height={pokemon.height} weight={pokemon.weight} />
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-4xl sm:text-5xl text-secondary">Stats</h2>
              <StatsTable
                formatDashedString={formatDashedString}
                stats={pokemon.stats}
              />
            </div>

            {locationEncounters && locationEncounters.length > 0 && (
              <div className="self-start w-full ">
                <h2 className="text-4xl mb-3 sm:mb-7 sm:text-5xl text-secondary">
                  Location
                </h2>
                <LocationList
                  formatDashedString={formatDashedString}
                  locationEncounters={locationEncounters}
                />
              </div>
            )}

            <div className="self-start sm:justify-self-center">
              <h2 className="text-4xl mb-3 sm:mb-7 sm:text-5xl text-secondary">
                Abilities
              </h2>
              <AbilitiesList
                abilities={pokemon.abilities}
                formatDashedString={formatDashedString}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Pokemon;
