import { PokemonDetailed } from "../../types";
import { FaWeightHanging } from "react-icons/fa";
import { BsRulers } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { PokemonType } from "../../types";
import PokemonTypes from "./PokemonTypes";
import Measurements from "./Measurements";

type CardProps = {
  pokemon: PokemonDetailed | null;
};

function Card({ pokemon }: CardProps) {
  const navigate = useNavigate();

  const upperCaseFirstLetter = (text: string) =>
    text.slice(0, 1).toUpperCase().concat(text.slice(1));

  const formatPokemonId = (id: number) =>
    (id < 10 && `#00${id}`) ||
    (id >= 10 && id < 100 && `#0${id}`) ||
    (id >= 100 && `#${id}`);

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "fire":
        return "#FF5733";
      case "water":
        return "#0077C9";
      case "flying":
        return "#87CEFA";
      case "bug":
        return "#9ACD32";
      case "poison":
        return "#9D0E0E";
      case "normal":
        return "#D3D3D3";
      case "grass":
        return "#32CD32";
      case "electric":
        return "#FFC107";
      case "ground":
        return "#704214";
      case "fairy":
        return "#FFB6C1";
      case "fighting":
        return "#E60000";
      case "psychic":
        return "#FF80AB";
      case "rock":
        return "#9B7D4E";
      case "steel":
        return "#BFBFBF";
      case "ice":
        return "#00BFFF";
    }
  };

  const handleLearnMore = () => {
    if (pokemon) {
      navigate(`/pokemon/${pokemon.name}`, {
        state: {
          name: pokemon.name.toLowerCase(),
          nameVisible: upperCaseFirstLetter(pokemon.name),
        },
        replace: false,
      });
    }
  };

  return (
    <>
      {pokemon && (
        <div className="flex flex-col items-stretch bg-secondary bg-opacity-10 p-7 w-full max-w-sm rounded-lg gap-4 justify-self-center text-center">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt="pokemon image"
            className="max-h-36"
          />
          <p className="text-2xl">{formatPokemonId(pokemon.id)}</p>
          <p className="text-3xl">{upperCaseFirstLetter(pokemon.name)}</p>

          <PokemonTypes
            types={pokemon.types}
            upperCaseFirstLetter={upperCaseFirstLetter}
          />

          <Measurements height={pokemon.height} weight={pokemon.weight} />

          <button
            className="bg-accent bg-opacity-10 w-full py-3 rounded-full"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      )}
    </>
  );
}

export default Card;
