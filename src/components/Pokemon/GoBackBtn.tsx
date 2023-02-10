import { useNavigate } from "react-router-dom";

function GoBackBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      className="justify-self-start self-start text-lg sm:text-lg bg-secondary bg-opacity-10 px-5 sm:px-8 py-3 rounded-lg mb-14"
      onClick={handleClick}
    >
      Back to pokedex
    </button>
  );
}

export default GoBackBtn;
