import { useNavigate } from "react-router-dom";
import { Undo2 } from "lucide-react";

const ButtonReturn = ({ destination = "/" }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <button
        className="p-2 w-16 flex items-center justify-center bg-sky-300 rounded-sm  hover:bg-sky-400 transition-all duration-300 ease-in-out"
        onClick={() => navigate(destination)}
      >
        <Undo2 size={24} color="white" />
      </button>
    </div>
  );
};

export default ButtonReturn;
