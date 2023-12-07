import ExploreclassIcon2 from "../icons/explorclass heading-icon2";
import ExploreclassIcon from "../icons/explorclassheading-icon";
import TableIcon1 from "../icons/table-icon1";
import TableIcon2 from "../icons/table-icon2";
import ThreedotIcon from "../icons/threedot-icon";

const data = [
  {
    id: 1456,
    image: <TableIcon1 />,
    paymentMethod: "Stripe - Credit Card",
    productName: "Jiu Jitsu Membership",
    purchaseDate: "25-Aug-2023",
    price: "£ 200.15",
    button: "Active",
  },
  {
    id: 1457,
    image: <TableIcon2 />,
    paymentMethod: "Judo Membership",
    productName: "GoCardless",
    purchaseDate: "27-Aug-2023",
    price: "£ 240.15",
    button: "Cancelled",
  },
  {
    id: 1458,
    image: <TableIcon2 />,
    paymentMethod: "Wrestling Membership",
    productName: "Cash",
    purchaseDate: "29-Aug-2023",
    price: "£ 200.15",
    button: "Pending",
  },
  // Add more data as needed
];

const Tablesection = () => {
  
  

  return (
    <>
      <main className="my-20  lg:w-[90%] w-full mx-auto">

     

        <div className="flex flex-col lg:mx-8 ">

        <div className="flex justify-between my-2">
          <h1 className="text-subheadingfont font-medium text-peacockblue">
          Latest Transaction
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

          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-bold text-pairagraphfont text-peacockblue">
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
                    {data.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap px-2 py-2 font-medium text-pairagraphfont text-blackcolor">
                          {item.id}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2">
                          {item.image}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 font-medium text-pairagraphfont text-blackcolor">
                          {item.productName}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 font-medium text-pairagraphfont text-blackcolor">
                          {item.paymentMethod}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 font-medium text-pairagraphfont text-blackcolor">
                          {item.purchaseDate}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 font-medium text-pairagraphfont text-blackcolor">
                          {item.price}
                        </td>
                        <td className="py-2 px-2 font-medium text-pairagraphfont text-blackcolor">
                          <button
                            className={`rounded-lg ${
                              item.id === 1457
                                ? "bg-[#E43535] px-6"
                                : item.id === 1458
                                ? "bg-[#FFAF40] px-7"
                                : "bg-[#4CAF50] px-8"
                            } py-1`}
                          >
                            {item.button}
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 pl-4">
                         <div className="relative">
                         <button
                           
                          >
                            <ThreedotIcon />
                          </button>
                         </div>
                          
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tablesection;
