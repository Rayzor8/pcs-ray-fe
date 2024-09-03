import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { notifications } from "../../data";

const Header = () => {
  const navigate = useNavigate();
  const gotoNotification = () => {
    navigate("/notifications");
  };

  return (
    <header className="container w-full flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-red-500">KerjaYuk!</h1>
      <button className="relative" onClick={gotoNotification}>
        <IoMdNotificationsOutline className="cursor-pointer text-2xl" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
          {notifications.length}
        </span>
      </button>
    </header>
  );
};

export default Header;
