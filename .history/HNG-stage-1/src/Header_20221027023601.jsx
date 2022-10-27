import React from "react";

const Header = () => {
  return (
    <section className="p-6">
      {/* image contaiber */}
      <div className=" flex justify-center mt-8 relative md:mt-4">
        <div className="flex flex-col space-y-6 items-center">
          <img
            id="profile__img"
            className="h-24 w-24 rounded-full"
            src="./images/IMG-1295.jpg"
            alt="profile picture"
          />
          <p id="twitter" className="text-xl font-bold">
            Ian Alex
          </p>
        </div>
        {/* <p id="slack" className="text-xl font-bold">
          Ik-Alex
        </p> */}
        <div className="hidden md:block">
          <img src="../images/_Avatar share button full.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
