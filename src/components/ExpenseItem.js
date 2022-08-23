import React from 'react';
import {MdEdit, MdDelete} from "react-icons/md";

const ExpenseItem = ({expenses, deleteItem, editHandler}) => {

  const {charge, amount} = expenses;

  return (
    <li className={"flex border m-2 p-2 border-black"}>
      <div className={"basis-5/6 flex justify-between mx-4 capitalize"}>
        <span className={"pt-1.5 break-all text-left"}>{charge}</span>
        <div
          className={"h-11 pt-1 bg-red-500 px-2 text-white self-center ml-2"}>{amount}</div>
      </div>
      <div className={"basis-1/6 flex justify-around"}>
        <button className={"p-2 text-green-600"}
                onClick={editHandler}
                aria-label={"edit button"}><MdEdit/>
        </button>
        <button className={"p-2 text-red-600"}
                aria-label={"delete button"}
                onClick={deleteItem}><MdDelete/>
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;