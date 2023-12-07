import React from 'react';
import Membershipicon from '../icons/Membership-icon';
import Arrowicon from '../icons/Arrowup-icon';
import Arrowdon from '../icons/Arrowdon';
import Attendance from '../icons/attendance-icon';
import Training from '../icons/training-icon';
import Book from '../icons/bookin-icon';

const Cardsection = () => {
  const userInformation = [
    {
      icon: <Membershipicon />,
      text: "Membership",
      status: "Active",
      limit1: <Arrowicon />,
      uasage: "Expired",
      limit2: <Arrowdon />,
    },
    {
      icon: <Attendance />,
      text: "Attendance",
      status: "Present",
      limit1: <Arrowicon />,
      uasage: "Absent",
      limit2: <Arrowdon />,
    },
    {
      icon: <Training />,
      text: "Training Time",
      status: "Weekly",
      limit1: <Arrowicon />,
      uasage: "Monthly",
      limit2: <Arrowdon />,
    },
    {
      icon: <Book />,
      text: "Booking",
      status: "Active",
      limit1: <Arrowicon />,
      uasage: "Expired",
      limit2: <Arrowdon />,
    },
    // Add more objects as needed
  ];

  return (
    <>
      <main className='my-10 lg:w-[90%] mx-auto'>
        <div className='flex flex-wrap justify-around  lg:px-0 px-4 gap-2'>
          {userInformation.map((userInfo, index) => (
            <div key={index} className='w-[325px] h-auto py-5 border rounded-xl shadow-md opacity-100 bg-white mb-4 lg:mb-0'>
              <div className='flex justify-between px-2'>
                <div>
                  <h1>{userInfo.icon}</h1>
                  <p className='text-blackcolor text-pairagraphfont font-medium my-2'>{userInfo.status}</p>
                  <p className='text-blackcolor text-pairagraphfont font-medium'>{userInfo.uasage}</p>
                </div>
                <div>
                  <ul>
                    <li className='text-blackcolor text-pairagraphfont font-medium'>{userInfo.text}</li>
                    <li className='justify-end inline-flex items-center gap-2 w-full my-2'>
                      <span className='text-[#007F5F] text-pairagraphfont font-medium'>170</span>
                      <span>{userInfo.limit1}</span>
                    </li>
                    <li className='justify-end inline-flex items-center gap-2 w-full'>
                      <span className='text-[#D90429] text-pairagraphfont font-medium'>20</span>
                      <span>{userInfo.limit2}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Cardsection;
