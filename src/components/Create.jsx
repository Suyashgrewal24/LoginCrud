import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TableHead from './TableHead';
import Form from './Form';

function Create() {
  const navigate = useNavigate();

  // State for form inputs
  const [receiptNo, setReceiptNo] = useState('');
  const [receiptDate, setReceiptDate] = useState(new Date().toISOString().slice(0, 10));
  const [personName, setPersonName] = useState('');
  const [items, setItems] = useState([
    {
      description: '',
      unit: '',
      rate: '',
      quantity: '',
      discount: '',
      amount: '',
    },
  ]);
  const [remark, setRemark] = useState('');
  const [totalQty, setTotalQty] = useState('');
  const [totalAmt, setTotalAmt] = useState('');
  const [discount, setDiscount] = useState('');
  const [netAmt, setNetAmt] = useState('');

  useEffect(() => {
    calculateTotals();
  }, [items]);

  const generateReceiptNo = () => {
    // Generate a random receipt number
    const generatedNo = Math.floor(Math.random() * 1000000) + 1;
    setReceiptNo(generatedNo.toString());
  };

  useEffect(() => {
    generateReceiptNo();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare data to be sent to the server
    const data = {
      receiptNo,
      receiptDate,
      personName,
      items,
      remark,
      totalQty,
      totalAmt,
      discount,
      netAmt,
    };
    // Post data to the server
    axios
      .post('http://localhost:3001/crud', data)
      .then(() => {
        navigate('/read');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    const item = { ...updatedItems[index] };
    item[field] = value;
  
    // Recalculate the amount based on the new quantity and rate values
    if (field === 'quantity' || field === 'rate') {
      const quantity = parseFloat(item.quantity);
      const rate = parseFloat(item.rate);
      const discount = parseFloat(item.discount);
      const amount = !isNaN(quantity) && !isNaN(rate) ? quantity * rate : 0;
      item.amount = (amount - discount).toFixed(2);
    }
  
    updatedItems[index] = item;
    setItems(updatedItems);
  };
  
  
  
  const addItem = () => {
    setItems([
      ...items,
      { description: '', unit: '', rate: '', quantity: '', discount: '', amount: '' },
    ]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  const calculateTotals = () => {
    let qtySum = 0;
    let amtSum = 0;
    let discountSum = 0;
    let netAmtSum = 0;
  
    items.forEach((item) => {
      const quantity = parseFloat(item.quantity);
      const amount = parseFloat(item.amount);
      const itemDiscount = parseFloat(item.discount);
  
      if (!isNaN(quantity)) {
        qtySum += quantity;
      }
      if (!isNaN(amount)) {
        amtSum += amount;
      }
      if (!isNaN(itemDiscount)) {
        discountSum += itemDiscount;
      }
    });
  
    setTotalQty(qtySum.toFixed(2));
    setTotalAmt(amtSum.toFixed(2));
    setDiscount(discountSum.toFixed(2));
  
    netAmtSum = amtSum - discountSum;
    setNetAmt(netAmtSum.toFixed(2));
  };
  
  

  useEffect(() => {
    // Save data to local storage
    const data = {
      receiptNo,
      receiptDate,
      personName,
      items,
      remark,
      totalQty,
      totalAmt,
      discount,
      netAmt,
    };
    localStorage.setItem('receiptData', JSON.stringify(data));
  }, [receiptNo, receiptDate, personName, items, remark, totalQty, totalAmt, discount, netAmt]);

  return (
    <>
      {/* table head */}
      <TableHead handleSubmit={handleSubmit} removeItem={removeItem}/>

      {/* table box */}
      <div className="table-container m-5 md:mx-20 border-black border-solid border-2">
        <Form
          handleSubmit={handleSubmit}
          receiptNo={receiptNo}
          receiptDate={receiptDate}
          personName={personName}
          setPersonName={setPersonName}
          items={items}
          handleItemChange={handleItemChange}
          removeItem={removeItem}
          addItem={addItem}
          totalAmt={totalAmt}
          discount={discount}
          netAmt={netAmt}
          remark={remark}
          setRemark={setRemark}
        />
      </div>
    </>
  );
}

export default Create;
