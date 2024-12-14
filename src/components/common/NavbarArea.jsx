import React from "react";

const NavbarArea = () => {
  return (
    <section className=" border-b-1 border-b-[#DCDCDC] w-full">
      <div className="py-5 px-2 max-w-[1350px] mx-auto flex items-center justify-between">
        <div>
          <img className="sm:w-[166px] sm:h-[49px] w-[130px] h-[45px]" src="/public/logo.png" alt="" />
        </div>

        <div className="border md:flex hidden border-[#DCDCDC] p-1 rounded-full">
          <div className="flex items-center justify-between gap-6 md:w-[600px] w-[280px] lg:w-[650px] ">
            <input
              className="text-[#7A7A7A] text-[16px] w-[40%] ml-3 py-1 border-r border-r-[#DCDCDC]"
              placeholder="restaurant, hotel, service...."
              type="text"
            />
            <input
              className="text-[#7A7A7A] w-[40%] py-1 text-[16px]"
              placeholder="Singapur"
              type="text"
            />
            <button>
              <img className=" size-[43px]" src="/public/search.png" alt="fds" />
            </button>
          </div>
        </div>

        <div className="items-center flex gap-2">
          <img src="/public/world.png" alt="" />
          <button className="font-roboto text-[16px] md:px-5 md:py-3 px-2 py-1.5 bg-black text-white rounded-full ">
            MyFeedback for business
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavbarArea;
