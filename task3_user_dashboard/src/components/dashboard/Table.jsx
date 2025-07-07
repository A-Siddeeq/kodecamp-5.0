import { React, useState } from "react";
import { CiSearch } from "react-icons/ci";

const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Inactive",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Active",
  },
];

function Table() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col xl:mx-12 bg-white w-full mb-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between my-4 px-4">
        <div>
          <h1 className="font-[600] text-[14px] xl:text-[22px] leading-[33px]">
            All Customers
          </h1>
          <div className="font-[400] text-[12px] xl:text-[14px] text-[#16C098] xl:leading-[21px]">
            Active Members
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
          <div className="relative">
            <CiSearch className="absolute top-2.5 left-2 text-gray-400" />
            <input
              className="pl-8 rounded-xl w-full sm:w-[216px] h-[38px] py-2 px-3 text-[#B5B7C0] bg-white font-[400] text-[14px] leading-[21px] focus:outline-none"
              placeholder="Search"
            />
          </div>
          <select className="border border-gray-300 text-[12px] sm:text-[14px] h-[38px] sm:w-[150px] rounded-[10px] px-2">
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </select>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block px-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b border-b-[#EEEEEE] text-left">
              {[
                "Customer Name",
                "Company",
                "Phone Number",
                "Email",
                "Country",
                "Status",
              ].map((heading, idx) => (
                <th
                  key={idx}
                  className="font-[500] text-[12px] xl:text-[14px] text-[#B5B7C0] py-2"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr className="border-b border-b-[#EEEEEE]" key={index}>
                <td className="text-[12px] xl:text-[14px] text-[#292D32] py-2">
                  {customer.name}
                </td>
                <td className="text-[12px] xl:text-[14px] text-[#292D32]">
                  {customer.company}
                </td>
                <td className="text-[12px] xl:text-[14px] text-[#292D32]">
                  {customer.phone}
                </td>
                <td className="text-[12px] xl:text-[14px] text-[#292D32]">
                  {customer.email}
                </td>
                <td className="text-[12px] xl:text-[14px] text-[#292D32]">
                  {customer.country}
                </td>
                <td className="text-[12px] xl:text-[14px]">
                  <button
                    className={`font-[500] text-[12px] rounded-md border py-1 px-3 leading-[21px] ${
                      customer.status === "Active"
                        ? "bg-[#16C09861] border-[#00B087] text-[#00B087]"
                        : "bg-[#FFC5C5] border-[#DF0404] text-[#DF0404]"
                    }`}
                  >
                    {customer.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden space-y-4 px-4">
        {filteredCustomers.map((customer, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="mb-2">
              <span className="font-semibold text-gray-600">Name:</span>{" "}
              {customer.name}
            </div>
            <div className="mb-2">
              <span className="font-semibold text-gray-600">Company:</span>{" "}
              {customer.company}
            </div>
            <div className="mb-2">
              <span className="font-semibold text-gray-600">Phone:</span>{" "}
              {customer.phone}
            </div>
            <div className="mb-2">
              <span className="font-semibold text-gray-600">Email:</span>{" "}
              {customer.email}
            </div>
            <div className="mb-2">
              <span className="font-semibold text-gray-600">Country:</span>{" "}
              {customer.country}
            </div>
            <div>
              <span className="font-semibold text-gray-600">Status:</span>{" "}
              <button
                className={`font-[500] text-[12px] rounded-md border py-1 px-3 leading-[21px] ${
                  customer.status === "Active"
                    ? "bg-[#16C09861] border-[#00B087] text-[#00B087]"
                    : "bg-[#FFC5C5] border-[#DF0404] text-[#DF0404]"
                }`}
              >
                {customer.status}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 px-4">
        <div className="text-[12px] xl:text-[16px] text-gray-600 mb-2 sm:mb-0">
          Showing data 1 to 8 of 256K entries
        </div>
        <div className="flex gap-x-1">
          <button className="bg-[#F5F5F5] text-[#404B52] text-[12px] xl:text-[16px] px-3 py-1 border rounded-sm">
            {"<"}
          </button>
          {[1, 2, 3, 4, "...", 40].map((num, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded-sm ${
                num == 1
                  ? "bg-[#5932EA] text-white"
                  : "bg-[#F5F5F5] text-[#404B52]"
              }`}
            >
              {num}
            </button>
          ))}
          <button className="bg-[#F5F5F5] text-[#404B52] px-3 py-1 border rounded-sm">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
