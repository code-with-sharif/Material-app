import React from "react";
import Exploreclaasesicon from "../icons/explorclassheading-icon";
import Exploreclaasesicon2 from "../icons/explorclass heading-icon2";
import exploreimg1 from "../Images/exploreimg1.png";
import Buttonicon1 from "../icons/button-icon1";
import Buttonicon2 from "../icons/button-icon2";
import Threedoticon from "../icons/threedot-icon";
import ButtonIcon1 from "../icons/button-icon1";
import ButtonIcon2 from "../icons/button-icon2";
import ExploreclassIcon from "../icons/explorclassheading-icon";
import ThreedotIcon from "../icons/threedot-icon";
import ExploreclassIcon2 from "../icons/explorclass heading-icon2";

const classData = [
  {
    id: 1,
    img: exploreimg1,
    title: "Jiu Jitsu",
    date: "Mon 21 Aug 2023",
    capacity: "12/30",
    time: "07:00 PM - 08:30 PM",
    button1: "Book Now",
    button2: "Details",
  },
  {
    id: 2,
    img: exploreimg1,
    title: "Jiu Jitsu",
    date: "Mon 21 Aug 2023",
    capacity: "12/30",
    time: "07:00 PM - 08:30 PM",
    button1: "Booked",
    button2: "Details",
  },
  {
    id: 3,
    img: exploreimg1,
    title: "Jiu Jitsu",
    date: "Mon 21 Aug 2023",
    capacity: "12/30",
    time: "07:00 PM - 08:30 PM",
    button1: "cancelled",
    button2: "Details",
  },
  // Add more data as needed
];

const Exploreclaases = () => {
  return (
    <main className="my-10 lg:w-[90%] mx-auto">
      {/* <div className="flex flex-wrap "> */}

      <div className="w-full px-4 h-auto py-4 border rounded-xl opacity-100 shadow-md mb-5">
        <div className="flex justify-between my-2">
          <h1 className="text-subheadingfont font-medium text-peacockblue">
            Explore Classes
          </h1>
          <p className="text-pairagraphfont font-medium text-peacockblue inline-flex items-center ">
            <span>
              <ExploreclassIcon />
            </span>
            <span className="mx-2">View All</span>
            <span>
              <ExploreclassIcon2 />
            </span>
          </p>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 ">
          {classData.map((classItem) => (
            <div
              key={classItem.id}
              className=" w-full  h-auto pb-2 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img className="w-full" src={classItem.img} alt="" />
              </a>

              <div className="flex justify-between px-4">
                <ul>
                  <li className="text-blackcolor text-pairagraphfont font-bold">
                    {classItem.title}
                  </li>
                  <li className="text-blackcolor text-pairagraphfont font-medium">
                    {classItem.date}
                  </li>
                </ul>
                <ul>
                  <li className="text-blackcolor text-pairagraphfont font-bold inline-flex items-center  gap-2 w-full justify-end ">
                    <span>{classItem.capacity}</span>{" "}
                    <span>
                      <ThreedotIcon />
                    </span>
                  </li>

                  <li className="text-blackcolor text-pairagraphfont font-medium">
                    {classItem.time}
                  </li>
                </ul>
              </div>
              <hr className="border border-gray-200 overflow-x-hidden" />
              <div className="flex gap-3 pt-2 justify-center overflow-hidden">
                <button
                  className={`inline-flex items-center w-full py-1 px-3 gap-2 text-pairagraphfont font-medium text-blackcolor ${
                    classItem.id === 3 ? "bg-[#FFDEDE]" : "bg-[#F5F5F5]"
                  } rounded-md justify-center`}
                >
                  <span>
                    <ButtonIcon1 />
                  </span>
                  <span>{classItem.button1}</span>
                </button>

                <button className=" inline-flex items-center justify-center  w-full py-1 px-3 gap-2 text-pairagraphfont font-medium text-blackcolor bg-[#E8F7FF] rounded-md ">
                  <span>
                    <ButtonIcon2 />
                  </span>
                  <span>{classItem.button2}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* </div> */}
    </main>
  );
};

export default Exploreclaases;
