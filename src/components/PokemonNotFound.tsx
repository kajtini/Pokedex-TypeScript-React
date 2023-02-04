import { FaSadTear } from "react-icons/fa";

type PokemonNotFoundProps = {
  submitValue: string;
};

function PokemonNotFound({ submitValue }: PokemonNotFoundProps) {
  return (
    <div className="flex items-center gap-3">
      <p className="text-3xl">No pokemon found with name {submitValue}</p>
      <FaSadTear size={25} />
    </div>
  );
}

export default PokemonNotFound;
