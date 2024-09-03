import clsx from "clsx";
import { FaHome, FaRegCalendar } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";

const navlist = [
  {
    name: "Home",
    icon: (
      <FaHome className="text-2xl text-red-500 hover:text-red-500 transition-colors" />
    ),
  },
  {
    name: "Attendance",
    icon: (
      <FaRegCalendar className="text-2xl hover:text-red-500 transition-colors" />
    ),
  },
  {
    name: "Checkout",
    icon: <BsCartCheck className="text-2xl text-white" />,
  },
  {
    name: "Form",
    icon: <FaHome className="text-2xl hover:text-red-500 transition-colors" />,
  },
  {
    name: "Settings",
    icon: <FaHome className="text-2xl hover:text-red-500 transition-colors" />,
  },
];

const Footer = () => {
  return (
    <footer className="mt-6">
      <nav className="flex justify-around items-center py-2 border border-t-slate-200">
        {navlist.map((nav, idx) => (
          <button
            className="flex flex-col items-center cursor-pointer relative gap-1 "
            key={idx}
          >
            <div
              className={clsx("flex justify-center items-center", {
                "bg-red-500 w-10 h-10 rounded-full": nav.name === "Checkout",
              })}
            >
              {nav.icon}
            </div>

            <p
              className={clsx("text-xs", {
                "text-red-500": nav.name === "Home",
              })}
            >
              {nav.name}
            </p>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
