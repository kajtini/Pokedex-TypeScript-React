import { PokemonDetailed, Pagination, PageData } from "../types";
import Card from "./Pokemon/Card";
import DirectionBtn from "./DirectionBtn";
import PaginationProgress from "./PaginationProgress";

type PokemonListProps = {
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  allPokemonDetailed: Array<PokemonDetailed> | null;
  BASE_URL: string;
  currentPageData: PageData | null;
};

function PokemonList({
  allPokemonDetailed,
  pagination,
  setPagination,
  BASE_URL,
  currentPageData,
}: PokemonListProps) {
  function handleNextClick() {
    if (currentPageData?.next) {
      if (pagination.currentPageNumber + 1 <= pagination.allPages) {
        setPagination((prevPagination) => ({
          ...prevPagination,
          currentPageNumber: prevPagination.currentPageNumber + 1,
          currentPageUrl: currentPageData.next,
        }));
      }
    }
  }

  function handlePreviousClick() {
    if (currentPageData?.previous) {
      if (pagination.currentPageNumber - 1 >= 1) {
        setPagination((prevPagination) => ({
          ...prevPagination,
          currentPageNumber: prevPagination.currentPageNumber - 1,
          currentPageUrl: currentPageData.previous,
        }));
      }
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-6">
        {allPokemonDetailed?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <div className="grid grid-cols-3 max-w-sm gap-x-5 sm:ml-auto mx-auto sm:mx-0">
        <div className="flex flex-col items-center justify-center ">
          <PaginationProgress pagination={pagination} />
          <button
            className="text-sm opacity-80 cursor-pointer"
            onClick={() => {
              setPagination((prevPagination) => ({
                ...prevPagination,
                currentPageNumber: 1,
                currentPageUrl: BASE_URL,
              }));
            }}
          >
            Back to first
          </button>
        </div>
        <DirectionBtn
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          direction="previous"
        />
        <DirectionBtn
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          direction="next"
        />
      </div>
    </>
  );
}

export default PokemonList;
