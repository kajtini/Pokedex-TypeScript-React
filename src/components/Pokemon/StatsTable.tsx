import { Stat } from "../../types";

type StatsTableProps = {
  stats: Array<Stat>;
  formatDashedString: (text: string) => string;
};

function StatsTable({ stats, formatDashedString }: StatsTableProps) {
  return (
    <table className="w-full">
      <tbody>
        {stats.map((stat, i) => (
          <tr
            key={stat.stat.name}
            className={`border-b border-opacity-10 border-accent ${
              i === stats.length - 1 && "border-none"
            }`}
          >
            <td className="text-lg sm:text-2xl py-3 font-light sm:py-7">
              {formatDashedString(stat.stat.name)}
            </td>
            <td className="text-lg sm:text-2xl py-3 font-light sm:py-7">
              {stat.base_stat}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StatsTable;
