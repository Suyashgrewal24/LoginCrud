import React, { useState } from 'react';

const TableHead = ({ handleSubmit, removeItem }) => {
  const [printing, setPrinting] = useState(false);

  const handlePrint = () => {
    setPrinting(true);
    window.print();
    setPrinting(false);
  };

  return (
    <>
      <div className="table-head m-5 md:flex justify-between px-2 md:pb-2 md:px-20">
        <p className="text-2xl font-semibold">Receipt Crud</p>
        <div className="buttons py-2 md:py-0 space-x-8">
          <button onClick={handleSubmit} className="p-1 w-16 text-white rounded-lg bg-green-500">
            Save
          </button>
          <button onClick={removeItem} className="p-1 w-16 text-white rounded-lg bg-red-500">
            Delete
          </button>
          <button onClick={handlePrint} className="p-1 w-16 text-white rounded-lg bg-yellow-500">
            Print
          </button>
        </div>
      </div>
      {/* {!printing && (
        <div id="print-content">
        
        </div>
      )}
      {printing && (
        <div>
        
        </div>
      )} */}
    </>
  );
};

export default TableHead;
