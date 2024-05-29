import { Divide } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/37351/silhouette-aerialist-female-woman.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/8092430/pexels-photo-8092430.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/9643130/pexels-photo-9643130.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/20336209/pexels-photo-20336209/free-photo-of-a-house-in-winter.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];
  return (
    <div className=" mx-auto text-center max-w-[1440px] items-center flex flex-col pt-24 h-full  w-full px-8 ">
      <h3 class=" text-3xl lg:text-5xl text-white mb-24 font-bold ">Galéria</h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center grayscale duration-700 hover:grayscale-0  transition  "
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
