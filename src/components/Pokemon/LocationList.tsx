import { useState } from "react";
import { Location } from "../../types";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { GiCaveEntrance } from "react-icons/gi";

type LocationListProps = {
  locationEncounters: Array<Location>;
  formatDashedString: (text: string) => string;
};

function LocationList({
  locationEncounters,
  formatDashedString,
}: LocationListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(locationEncounters.length / perPage);

  const handleRightClick = () => {
    if (currentPage + 1 <= totalPages) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentPage - 1 >= 1) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    }
  };

  return (
    <>
      <ul className="w-full mb-5">
        {locationEncounters
          ?.map((location, i) => (
            <li
              key={location.location_area.url}
              className={` ${
                i === locationEncounters.length - 1 && "mb-0"
              } mb-3 sm:mb-7 flex items-center gap-3`}
            >
              <GiCaveEntrance size={20} />
              <p className="text-lg sm:text-2xl font-light">
                {formatDashedString(location.location_area.name)}
              </p>
            </li>
          ))
          .slice((currentPage - 1) * perPage, currentPage * perPage)}
      </ul>
      {totalPages > perPage && (
        <div className="flex gap-3 justify-end w-full items-center">
          <div>
            <p className="text-lg">
              {currentPage}/{totalPages}
            </p>
          </div>

          <div className="flex">
            <AiOutlineLeft
              size={30}
              onClick={handleLeftClick}
              className="cursor-pointer"
            />
            <AiOutlineRight
              size={30}
              onClick={handleRightClick}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default LocationList;
