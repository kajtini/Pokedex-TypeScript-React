import { Ability } from "../../types";
import { GiBattleGear } from "react-icons/gi";

type AbilitiesListProps = {
  abilities: Array<Ability>;
  formatDashedString: (text: string) => string;
};

function AbilitiesList({ abilities, formatDashedString }: AbilitiesListProps) {
  return (
    <ul>
      {abilities.map((ability, i) => (
        <li
          key={ability.ability.url}
          className={` ${
            i === abilities.length - 1 && "mb-0"
          } mb-3 sm:mb-7 flex items-center gap-3`}
        >
          <GiBattleGear size={20} />
          <p className="text-lg sm:text-2xl font-light">
            {formatDashedString(ability.ability.name)}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default AbilitiesList;
