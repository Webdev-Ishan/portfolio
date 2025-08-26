import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`inline-flex h-12 w-full md:w-60 md:mt-10 
        items-center justify-center gap-2 rounded-2xl 
        bg-blue-600 px-7 text-sm font-medium text-white 
        hover:bg-blue-700 transition ${otherClasses}`}
    >
      {position === "left" && icon}
      {title || "Show My Work"}
      {position === "right" && icon}
    </button>
  );
};

export default MagicButton;
