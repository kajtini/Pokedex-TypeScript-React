import { BsRulers } from "react-icons/bs";
import { FaWeightHanging } from "react-icons/fa";

type MeasurementsProps = {
  weight: number;
  height: number;
};

function Measurements({ weight, height }: MeasurementsProps) {
  return (
    <div className="text-center flex gap-8 mx-auto">
      <div>
        <div className="flex items-center gap-2">
          <BsRulers size={12} />
          <p className="text-lg">Height</p>
        </div>
        <p>{height}</p>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <FaWeightHanging size={12} />
          <p className="text-lg">Weight</p>
        </div>
        <p>{weight}</p>
      </div>
    </div>
  );
}

export default Measurements;
