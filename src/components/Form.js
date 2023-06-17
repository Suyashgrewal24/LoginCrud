import React from 'react'
import CreateTable from './CreateTable'

const Form = ({
    handleSubmit,
    receiptNo,
    setReceiptNo,
    receiptDate,
    setReceiptDate,
    personName,
    setPersonName,
    items,
    handleItemChange,
    removeItem,
    addItem,
    totalAmt,
    setTotalAmt,
    discount,
    setDiscount,
    netAmt,
    setNetAmt,
    remark,
    setRemark,
}) => {

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* date input */}
                <div className="inputs flex space-x-24 md:px-12 pt-5">
                    <input
                        className="border-2 border-solid p-1 border-black rounded-md"
                        type="text"
                        placeholder="Receipt No."
                        value={receiptNo}
                        onChange={(e) => setReceiptNo(e.target.value)}
                    />
                    <input
                        className="border-2 border-solid p-1 border-black rounded-md"
                        type="date"
                        placeholder="Receipt Date"
                        value={receiptDate}
                        onChange={(e) => setReceiptDate(e.target.value)}
                    />
                </div>

                {/* name input */}
                <input
                    type="text"
                    placeholder="Person Name"
                    onChange={(e) => setPersonName(e.target.value)}
                    className="border-2 border-solid p-1 mx-12 mt-5 md:w-96 border-black rounded-md"
                    value={personName}
                />

                {/* table */}
                <CreateTable items={items} handleItemChange={handleItemChange} removeItem={removeItem} addItem={addItem} />
                <div className="level-1">
                    {/* Total and remark */}
                    <div className=" inputs w-44 md:flex space-y-3 md:space-x-12 md:px-12 pt-8 pb-2">

                        <div className="input-wrapper flex flex-col space-y-1 ">
                            <label htmlFor="totalAmt">Total Amount: </label>
                            <input
                                className="border-2 border-solid p-1 border-black rounded-md"

                                type="text"
                                id="totalAmt"
                                placeholder="Total Amount"
                                value={totalAmt}
                                onChange={(e) => setTotalAmt(e.target.value)}
                            />
                        </div>
                        <div className="input-wrapper flex flex-col space-y-1 ">
                            <label htmlFor="discount">Discount: </label>
                            <input
                                className="border-2 border-solid p-1 border-black rounded-md"
                                type="text"
                                id="discount"
                                placeholder="Discount"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                            />
                        </div>
                        <div className="input-wrapper flex flex-col space-y-1">
                            <label htmlFor="netAmt">Net Amount: </label>
                            <input
                                className="border-2 border-solid p-1 border-black rounded-md"
                                type="text"
                                id="netAmt"
                                placeholder="Net Amount"
                                value={netAmt}
                                onChange={(e) => setNetAmt(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Remark input */}
                    <div className="level-2 inputs flex md:px-12 pt-8 pb-5">
                        <div className="input-wrapper">

                            <textarea
                                className="border-2 border-solid p-1 mx-12 mt-5 md:w-96 border-black rounded-md"
                                id="remark"
                                placeholder="Remark"
                                value={remark}
                                onChange={(e) => setRemark(e.target.value)}
                            />
                        </div>
                    </div>
                </div>


                {/* table bottom */}
                <div className="table-bottom m-5 md:mx-20 flex justify-between px-2">
                    <div>
                        <button className="p-1 w-16 text-white rounded-lg bg-blue-500">Cancel</button>
                    </div>
                    <div className="buttons py-2 md:py-0 space-x-8">
                        <button onSubmit={handleSubmit} className="p-1 w-16 text-white rounded-lg bg-green-500">
                            Save
                        </button>

                    </div>
                </div>
            </form>
        </>
    )
}

export default Form