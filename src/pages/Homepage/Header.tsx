import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className="container w-full flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-red-500">KerjaYuk!</h1>
      <div className="relative">
        <IoMdNotificationsOutline className="cursor-pointer text-2xl" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
          2
        </span>
      </div>
    </header>
  );
};

export default Header;
