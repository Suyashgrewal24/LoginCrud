import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Read() {
  const [readData, setReadData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch('http://localhost:3001/crud');
    const json = await res.json();
    setReadData(json);
  };

  return (
    <>
      <nav className="d-flex bg-gray-700 p-4 px-28">
        <Link to="/login">
          <button className="p-2 justify-end bg-red-600 rounded-xl">Logout</button>
        </Link>
        <Link to="/home">
          <button className="p-2 justify-end text-white font-semibold rounded-xl">Write</button>
        </Link>
      </nav>
      <div className="overflow-x-auto md:p-12 md:px-44">
        <table className=" text-sm text-left border-2 border-solid border-black text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr No
              </th>
              <th scope="col" className="px-6 py-3">
             Receipt No </th>
             <th scope="col" className="px-6 py-3">
             Person Name</th>
              <th scope="col" className="px-6 py-3">
             Receipt Date</th>
            
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Amount.
              </th>
              <th scope="col" className="px-6 py-3">
                Discount
              </th>
              <th scope="col" className="px-6 py-3">
                Net Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {readData.map((data) => (
              <tr
                className="bg-white text-black border-b dark:bg-gray-800 dark:border-gray-700"
                key={data.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                >
                  {data.id}
                </th>
                <td className="px-6 py-4">{data.receiptNo}</td>
                <td className="px-6 py-4">{data.personName}</td>
                <td className="px-6 py-4">{data.receiptDate}</td>
         
                <td className="px-6 py-4">{data.items[0].description}</td>
                <td className="px-6 py-4">{data.totalAmt}</td>
                <td className="px-6 py-4">{data.discount}</td>
                <td className="px-6 py-4">{data.netAmt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Read;
