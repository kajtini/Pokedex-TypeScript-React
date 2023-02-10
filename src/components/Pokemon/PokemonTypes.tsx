import { PokemonType } from "../../types";

type PokemonTypeProps = {
  upperCaseFirstLetter?: (text: string) => string;
  types: PokemonType[];
};

function PokemonTypes({ upperCaseFirstLetter, types }: PokemonTypeProps) {
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

  const displayTypes = (types: PokemonType[]) =>
    types.map((type) => (
      <p
        style={{ backgroundColor: `${getTypeColor(type.type.name)}` }}
        key={type.slot}
        className="rounded-lg px-4"
      >
        {upperCaseFirstLetter
          ? upperCaseFirstLetter(type.type.name)
          : type.type.name
              .slice(0, 1)
              .toUpperCase()
              .concat(type.type.name.slice(1))}
      </p>
    ));

  return (
    <div className="flex items-center justify-center gap-4">
      {displayTypes(types)}
    </div>
  );
}

export default PokemonTypes;
