import { FaCheck, FaArrowRight, FaWindowClose } from "react-icons/fa";
import { capitalize } from "../../utils";
import { notifications } from "../../data";

function getIconByStatus(status: string) {
  switch (status) {
    case "approve":
      return <FaCheck className="text-green-500 text-2xl" />;
    case "rejected":
      return <FaWindowClose className="text-red-500 text-2xl" />;
    case "pending":
      return <FaArrowRight className="text-blue-500 text-2xl" />;
  }
}

const Content = () => {
  return (
    <main className="pt-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 flex justify-between items-center  ${
            (notification.status === "approve" ||
              notification.status === "pending") &&
            "bg-blue-100"
          }`}
        >
          <div className="flex gap-4 items-center">
            {getIconByStatus(notification.status)}
            <div>
              <p className="font-bold">{notification.title}</p>
              <p className="text-sm">
                {notification.description}{" "}
                <u>{capitalize(notification.status)}</u>
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 text-xs italic">
              {notification.date}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Content;
