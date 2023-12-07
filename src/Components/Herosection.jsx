import React from "react";
import userimg from "../Images/User Profile.png";

import LocationIcon from "../icons/location-icon";
import Emailicon from "../icons/email-icon";
import Calendericon from "../icons/calender-icon";
import Dobicon from "../icons/Dob-icon";
// import Callicon from "../icons/call-icon";

const Herosection = () => {
  const userInformation = [
    {
      icon: <LocationIcon />,
      text: "76 St Maurices Road, Priest Hutton, United Kingdom, LA6 2YZ",
    },
    {
      icon: <Emailicon /> ,
      text: "Stevens.wilson@gmail.com  ",
    },
    {
    //   icon:useric ,
      text: "+4167207045",
    },
    {
      icon: <Calendericon />,
      text: "Join From: 13 March, 2023",
    },
    {
      icon: <Dobicon />,
      text: "D.O.B: 13 March, 2001",
    },
    // Add more objects as needed
  ];

  return (
    <>
      <main className="bg-[#CCE4ED] lg:w-[90%]  md:w-full mx-auto mt-20 rounded-md">
        <div className="flex md:flex-row flex-col">
          <section className="px-4 py-4 lg:w-6/12 w-full h-auto pb-4 md:order-1 order-2 ">
            <h1 className="text-subheadingfont text-blackcolor font-medium leading-8">
              Hello! Good Morning
            </h1>
            <h2 className="text-headingfont text-blackcolor font-medium">
              Stevens Wilson 👋
            </h2>
            <div className="pt-5  w-11/12 lg:pr-14">
              {userInformation.map((userInfo, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center ${
                    index === 2 ? "lg:ml-7" : index === 4 ? "lg:ml-8" : "" // Add margin to specific indices
                  }`}
                >
                  <h1>
                   <span>{userInfo.icon}</span>
                  </h1>
                  <p className="pl-2 text-blackcolor text-pairagraphfont font-normal">
                    {userInfo.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* section 2 */}
          <section className="px-8 py-4 lg:w-6/12 w-full h-auto pb-4 lg:order-2 order-1 ">
            <div className="flex justify-center">
              {" "}
              <img className="w-[230px] h-[230px]" src={userimg} alt="" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Herosection;
