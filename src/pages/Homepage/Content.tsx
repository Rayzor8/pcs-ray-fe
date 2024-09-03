import clsx from "clsx";
import Card from "../../ui/Card";
import { BsClock, BsClockHistory } from "react-icons/bs";
import { TbClock12 } from "react-icons/tb";
import Caraousel from "../../ui/Caraousel";
export const Content = () => {
  const activities = [
    {
      icon: <BsClock className="text-2xl text-red-500" />,
      time: "10.00",
      info: "Check in",
    },
    {
      icon: <TbClock12 className="text-2xl text-red-500" />,
      time: "03:00:00",
      info: "Working hours",
    },
    {
      icon: <BsClockHistory className="text-2xl text-red-500" />,
      time: "---:---",
      info: "Check out",
    },
  ];

  return (
    <main className="container py-6">
      <p>Hi, Good morning !</p>
      <Card bg="red">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex gap-4 items-center">
            <img
              src="https://randomuser.me/api/portraits/med/men/75.jpg"
              width="50"
              height="50"
              className="rounded-full"
            />
            <div className="flex flex-col items-start justify-center">
              <p className="font-bold text-sm">Tabay</p>
              <p className="text-xs italic font-extralight">UI/UX Designer</p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center">
            <p className="font-bold text-xs font-extralight">Member since</p>
            <p className="font-bold text-sm">01 Juni 2021</p>
          </div>
          <div>
            <p className="text-xs italic font-extralight">Location</p>
            <p className="font-bold text-sm">Kantor Sahid</p>
          </div>
          <p className="text-xs italic font-extralight text-end my-auto">ICO</p>
        </div>
      </Card>

      <section className="mt-8">
        <h2 className="text-lg font-bold">Today's activity</h2>
        <div className="grid grid-cols-3 gap-2">
          {activities.map((activity, idx) => (
            <Card bg="white" key={idx}>
              <div className="flex flex-col items-center gap-1">
                {activity.icon}
                <p
                  className={clsx("text-sm", "font-bold", {
                    "text-red-500": activity.info === "Working hours",
                  })}
                >
                  {activity.time}
                </p>
                <p className="text-xs">{activity.info}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <Caraousel/>
    </main>
  );
};
