type DirectionBtnProps = {
  direction: "previous" | "next";
  handleNextClick: () => void;
  handlePreviousClick: () => void;
};

function DirectionBtn({
  direction,
  handleNextClick,
  handlePreviousClick,
}: DirectionBtnProps) {
  return (
    <button
      className="bg-secondary rounded-full py-3 bg-opacity-5"
      onClick={direction === "previous" ? handlePreviousClick : handleNextClick}
    >
      {direction === "previous" ? "Previous" : "Next"}
    </button>
  );
}

export default DirectionBtn;
