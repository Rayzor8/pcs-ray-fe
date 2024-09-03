import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <header className="container w-full flex justify-start items-center shadow-md gap-4">
      <button onClick={gotoHome} className="cursor-pointer">
        <IoMdArrowBack className="text-2xl"/>
      </button>
      <h1 className="text-xl font-bold text-red-500">Notifications</h1>
    </header>
  );
};

export default Header;
