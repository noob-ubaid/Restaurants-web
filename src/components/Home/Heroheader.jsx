import React from "react";

const Heroheader = () => {
  const data = [
    {
      id: 1,
      img: "/public/all.png",
      title: "All",
    },
    {
      id: 2,
      img: "/public/restaurant.png",
      title: "Restaurants",
    },
    {
      id: 3,
      img: "/public/hotel.png",
      title: "Hotels",
    },
    {
      id: 4,
      img: "/public/Home.png",
      title: "Home services",
    },
    {
      id: 5,
      img: "/public/shop.png",
      title: "Shopping",
    },
    {
      id: 6,
      img: "/public/car.png",
      title: "Car location",
    },
    {
      id: 7,
      img: "/public/beauty.png",
      title: "Beauty & spa",
    },
    {
      id: 8,
      img: "/public/park.png",
      title: "Park",
    },
    {
      id: 9,
      img: "/public/museum.png",
      title: "Museum",
    },
    {
      id: 10,
      img: "/public/wash.png",
      title: "Car wash ",
    },
    {
      id: 11,
      img: "/public/bar.png",
      title: "Bars",
    },
    {
      id: 12,
      img: "/public/gym.png",
      title: "Gyms",
    },
  ];
  return (
    <section className="w-full max-w-[1350px] mx-auto">
      <div className="flex items-center pt-10 justify-between">
        {
            data.map((info) =>(
                <div className="flex flex-col items-center gap-2" key={info.id}>
                    <img className="w-[26px] h-[21px]" src={info.img} alt="" />
                    <p className="text-[#AFAFAF] font-roboto ">{info.title}</p>
                </div>
            ))
        }
      </div>
    </section>
  );
};

export default Heroheader;
