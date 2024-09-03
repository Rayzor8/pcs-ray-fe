import clsx from "clsx";
import Card from "../../ui/Card";
import Caraousel from "../../ui/Caraousel";
import { activities, carouselData, users } from "../../data";
export const Content = () => {
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

      <Caraousel carouselData={carouselData} />

      <section className="mt-8">
        <h2 className="text-lg font-bold">Today's activity</h2>
        <Card bg="white">
          <div className={`grid grid-cols-8`}>
            {users.map((user, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-[-20px]"
                >
                  <img
                    src={user.src}
                    className="rounded-full "
                    width="40"
                    alt={`user-${idx + 1}`}
                  />
                  <p className="text-[8px] font-bold">{user.name}</p>
                  <p className="text-[8px]">{user.city}</p>
                </div>
              );
            })}
            <button className="text-[8px] font-bold w-[40px] h-[40px] rounded-full bg-red-500 text-center text-white flex justify-center items-center cursor-pointer">
              10 more
            </button>
          </div>
        </Card>
      </section>
    </main>
  );
};
