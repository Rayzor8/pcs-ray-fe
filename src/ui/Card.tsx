import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  bg: "red" | "white";
};

const Card = ({ children, bg }: CardProps) => {
  return (
    <div
      className={clsx(
        "p-4 rounded-md my-2 shadow-md",
        bg === "red" ? "bg-red-500 text-white" : "bg-white text-black"
      )}
    >
      {children}
    </div>
  );
};

export default Card;
