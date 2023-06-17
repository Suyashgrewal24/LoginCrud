import React from 'react'

const CreateTable = ({
    items, handleItemChange, removeItem, addItem
}) => {
  return (
    <>
   <div className="relative overflow-x-auto md:p-12">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                   
                                
                                    <th scope="col" className="px-6 py-3">
                                        Qty.
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Discount
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Amount.
                                    </th>
                                    <th scope="col" className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <input
                                                type="text"
                                                placeholder="Enter description"
                                                className="border border-gray-300 px-4 py-2 w-full"
                                                value={item.description}
                                                onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                                            />
                                        </th>
                                       
                                        <td className="px-6 py-4">
                                            <input
                                                type="number"
                                                placeholder="Enter quantity"
                                                className="border border-gray-300 px-4 py-2 w-full"
                                                value={item.quantity}
                                                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <input
                                                type="number"
                                                placeholder="Enter discount"
                                                className="border border-gray-300 px-4 py-2 w-full"
                                                value={item.discount}
                                                onChange={(e) => handleItemChange(index, 'discount', e.target.value)}
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <input
                                                type="number"
                                                placeholder="Enter amount"
                                                className="border border-gray-300 px-4 py-2 w-full"
                                                value={item.amount}
                                                onChange={(e) => handleItemChange(index, 'amount', e.target.value)}
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <button type="button" onClick={() => removeItem(index)}>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-4">
                            <button className='p-1 bg-green-700 rounded-md text-white' type="button" onClick={addItem}>
                                Add Item
                            </button>
                        </div>
                    </div></>
  )
}

export default CreateTable