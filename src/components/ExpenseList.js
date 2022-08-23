import React from 'react';
import ExpenseItem from "./ExpenseItem";
import {MdDelete} from 'react-icons/md'

const ExpenseList = ({expenses, clearExpenses, deleteItem, editHandler}) => {
  return (
    <>
      <ul className={"w-[70vw]"}>
        {expenses.map((item) => {
          return <ExpenseItem key={expenses.id}
                              expenses={item}
                              editHandler={() => editHandler(item)}
                              deleteItem={() => deleteItem(item.id)}/>
        })}
      </ul>
      {expenses.length > 0 &&
        <button
          className={"bg-red-600 h-[2.5em] flex justify-self-center px-2 text-white mb-2"}
          onClick={clearExpenses}>
          <p className={"self-center"}>Clear expenses </p>
          <MdDelete className={"self-center"}/></button>}
    </>
  );
};

export default ExpenseList;