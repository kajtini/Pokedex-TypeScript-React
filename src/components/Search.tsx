import { AiFillHome } from "react-icons/ai";

type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSubmitValue: React.Dispatch<React.SetStateAction<string>>;
  handleHomePage: () => void;
};

function Search({
  search,
  setSearch,
  setSubmitValue,
  handleHomePage,
}: SearchProps) {
  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitValue(search);
    setSearch("");
  }

  return (
    <div className="flex items-center gap-3 mb-5">
      <form
        className="flex gap-3 items-center"
        onSubmit={(e) => handleSearchSubmit(e)}
      >
        <input
          name="nameSearch"
          type="text"
          placeholder="Search By Name"
          className="p-3 rounded-lg bg-white bg-opacity-5 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="p-3 bg-white bg-opacity-5 rounded-lg">Search</button>
      </form>
      <button
        className="p-3 bg-white bg-opacity-5 rounded-lg flex items-start gap-2"
        onClick={handleHomePage}
      >
        <AiFillHome size={20} />
        Home Page
      </button>
    </div>
  );
}

export default Search;
