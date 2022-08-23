import React, {useState} from 'react';
import {MdSend} from "react-icons/md";

const ExpenseForm = ({handleSubmit, charge, amount, setCharge, setAmount}) => {

  const labelStyle = "basis-1/4 text-left pl-2 self-center py-2"

  return (
    <form onSubmit={handleSubmit} className={"flex p-2"}>
      <div className={"w-3/4 "}>
        <div className={"border  h-1/2 flex"}>
          <label htmlFor="charge"
                 className={labelStyle}>Charge: </label>
          <input
            value={charge}
            onChange={(event) => setCharge(event.target.value)}
            type="text"
            className={"basis-3/4 px-2 outline-0"}
            name={"charge"}
            placeholder={"e.g rent"}
            id={"charge"}/>
        </div>
        <div className={"border h-1/2 flex"}>
          <label htmlFor="amount"
                 className={labelStyle}>Amount: </label>
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            type="number"
            className={"basis-3/4 px-2 outline-0"}
            name={"amount"}
            placeholder={"e.g 100"}
            id={"amount"}/>
        </div>
      </div>
      <button type={"submit"}
              className={"w-1/4 flex bg-green-600 h-1/2 translate-y-1/2 ml-2 justify-center text-white"}>
        <p className={"self-center"}>Submit</p>
        <MdSend className={"self-center ml-1"}/>
      </button>
    </form>
  );
};

export default ExpenseForm;