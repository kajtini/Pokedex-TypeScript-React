type PokemonNotFoundProps = {
  submitValue: string;
};

function PokemonNotFound({ submitValue }: PokemonNotFoundProps) {
  return <p className="text-3xl ">No pokemon found with name {submitValue}</p>;
}

export default PokemonNotFound;
