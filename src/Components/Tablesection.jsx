import React from 'react'
import Threedoticon from '../icons/threedot-icon';

const Tablesection = () => {
  return (
    <>
        <main className=' my-20 border-2 border-red-700 lg:w-[90%] w-full mx-auto'>

        
  <div className=" flex flex-col lg:mx-8 border-2 border-red-700">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-bold  text-pairagraphfont text-peacockblue">
              <tr>
                <th scope="col" className="px-2 py-2">
                Id
                </th>
                <th scope="col" className="px-2 py-2">
                Image
                </th>
                <th scope="col" className="px-2 py-2">
                Product Name
                </th>
                <th scope="col" className="px-2 py-2">
                Payment Method
                </th>
                <th scope="col" className="px-2 py-2">
                Purchase Date
                </th>
                <th scope="col" className="px-2 py-2">
                Price
                </th>
                <th scope="col" className="px-2 py-2">
                Status
                </th>
                <th scope="col" className="px-2 py-2">
                Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap  font-medium">1456</td>
                <td className="whitespace-nowrap ">Mark</td>
                <td className="whitespace-nowrap ">Jiu Jitsu Membership</td>
                <td className="whitespace-nowrap ">Stripe - Credit Card </td>
                <td className="whitespace-nowrap ">25-Aug-2023</td>
                <td className="whitespace-nowrap ">£ 200.15 </td>
                <td className="whitespa"><button className=' rounded-lg  bg-[#4CAF50]'>active</button></td>
                <td className="whitespace-nowrap ml-20"><Threedoticon /> </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


        </main>
    </>
  )
}

export default Tablesection;