import { PokemonDetailed } from "../types";
import { FaWeightHanging } from "react-icons/fa";
import { BsRulers } from "react-icons/bs";

type CardProps = {
  pokemon: PokemonDetailed | null;
};

function Card({ pokemon }: CardProps) {
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

  return (
    <>
      {pokemon && (
        <div className="flex flex-col items-stretch bg-white bg-opacity-10 p-7 w-full max-w-sm rounded-lg gap-4 justify-self-center text-center">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt="pokemon image"
            className="max-h-36"
          />
          <p className="text-2xl">{formatPokemonId(pokemon.id)}</p>
          <p className="text-3xl">{upperCaseFirstLetter(pokemon.name)}</p>

          <div className="flex items-center justify-center gap-4">
            {pokemon.types.map((type) => (
              <p
                style={{ backgroundColor: `${getTypeColor(type.type.name)}` }}
                key={type.slot}
                className="rounded-lg px-4"
              >
                {upperCaseFirstLetter(type.type.name)}
              </p>
            ))}
          </div>

          <div className="text-center flex gap-8 mx-auto">
            <div>
              <div className="flex items-center gap-2">
                <BsRulers size={12} />
                <p className="text-lg">Height</p>
              </div>
              <p>{pokemon.height}</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaWeightHanging size={12} />
                <p className="text-lg">Weight</p>
              </div>
              <p>{pokemon.weight}</p>
            </div>
          </div>

          <button className="bg-accent bg-opacity-30 w-full py-3 rounded-full">
            Learn More
          </button>
        </div>
      )}
    </>
  );
}

export default Card;
