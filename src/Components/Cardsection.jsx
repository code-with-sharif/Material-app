import React from 'react';
import Membershipicon from '../icons/membership-icon';
import Attendance from '../icons/attendance-icon';
import Training from '../icons/training-icon';
import Arrowdownicon from '../icons/Arrowdown';
import Arrowupicon from '../icons/Arrowup-icon';
import BookingIcon from '../icons/booking-icon';
import ArrowdownIcon from '../icons/Arrowdown';
import ArrowupIcon from '../icons/Arrowup-icon';
import AttendanceIcon from '../icons/attendance-icon';
import MembershipIcon from '../icons/membership-icon';
import TrainingIcon from '../icons/training-icon';

const Cardsection = () => {
  const userInformation = [
    {
      icon: <MembershipIcon />,
      text: "Membership",
      status: "Active",
      limit1: <ArrowupIcon />,
      uasage: "Expired",
      limit2: <ArrowdownIcon />,
    },
    {
      icon: <AttendanceIcon />,
      text: "Attendance",
      status: "Present",
      limit1: <ArrowupIcon />,
      uasage: "Absent",
      limit2: <ArrowdownIcon />,
    },
    {
      icon: <TrainingIcon />,
      text: "Training Time",
      status: "Weekly",
      limit1: <ArrowupIcon />,
      uasage: "Monthly",
      limit2: <ArrowdownIcon />,
    },
    {
      icon: <BookingIcon />,
      text: "Booking",
      status: "Active",
      limit1: <ArrowupIcon />,
      uasage: "Expired",
      limit2: <ArrowdownIcon />,
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
