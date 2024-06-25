import React, { useState, useEffect } from "react";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car5.png";
import car4 from "../assets/car6.png";
const CarList = [
  {
    id: 1,
    heading: "Best & Reliable Fast Cars",
    parag:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eligendi totam pariatur. Aspernatur doloremque dignissimos nulla? Nemo deserunt dolores autem!",
    car: car1,
    price: "$54,000",
    model: "Toyota",
  },
  {
    id: 2,
    heading: "Cheap & Durable Cars",
    parag:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eligendi totam pariatur. Aspernatur doloremque dignissimos nulla? Nemo deserunt dolores autem!",
    car: car2,
    price: "$24,000",
    model: "Mercedeze",
  },
  {
    id: 3,
    heading: "Strong & Beautiful Fast Cars",
    parag:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eligendi totam pariatur. Aspernatur doloremque dignissimos nulla? Nemo deserunt dolores autem!",
    car: car3,
    price: "$44,000",
    model: "Hyundai",
  },
];
function Hero() {
  const [model, setModel] = useState(car1);
  const [header, setHeader] = useState("Best & Reliable Fast Cars");
  const [texts, setTexts] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit nah nsms sjhsakhsksa shaskahs kskas"
  );
  return (
    <div className="flex justify-between items-center lg:flex-row flex-col-reverse px-8 py-14 dark:bg-black bg-gray-100 overflow-hidden gap-8">
      <div className="">
        <div>
          <div className="x">
            <h2 className="md:text-5xl text-3xl font-bold text-black dark:text-white">
              {header}
            </h2>
            <p className="text-lg leading-8 text-gray-600 py-4 dark:text-white">
              {texts}
            </p>
            <button className="bg-orange-300 text-lg p-2 font-bold text-white">
              Order Now
            </button>

            <div className="flex md:flex-row flex-col md:mt-3 mt-6">
              {CarList.map((item) => (
                <div
                  key={item.id}
                  className="flex md:flex-row flex-col md:items-center items-start bg-black  dark:bg-gray-200"
                >
                  <img
                    src={item.car}
                    alt="car models"
                    className="w-[150px] cursor-pointer hover:translate-y-1"
                    onClick={() => {
                      setModel(
                        item.id == 1 ? car1 : item.id == 2 ? car2 : car3
                      );
                      setHeader(item.heading);
                      setTexts(item.parag);
                    }}
                  />
                  <div>
                    <h2 className="text-gray-600 font-bold text-xl">
                      {item.model}
                    </h2>
                    <p className="text-gray-600 text-lg">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="y">
        <img
          src={model}
          alt="display-car"
          className="w-full object-contain"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
}

export default Hero;
