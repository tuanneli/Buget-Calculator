import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import {v4 as uuid} from 'uuid';
import {useEffect, useState} from "react";

const initialExpenses = localStorage.getItem('expenses') ?
  JSON.parse(localStorage.getItem('expenses')) : []

function App() {

  const [expenses, setExpenses] = useState(initialExpenses)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState('')
  const [alert, setAlert] = useState({show: false})

  const handleAlert = (text) => {
    setAlert({show: true, text: text})
    setTimeout(() => {
      setAlert({show: false})
    }, 5000)
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

  const addNewItem = (charge, amount) => {
    return setExpenses(
      [...expenses, {id: uuid(), charge: charge, amount: parseFloat(amount)}])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (charge && amount > 0) {
      if (edit) {
        setExpenses(expenses.map(item => {
          if (item.id === id) {
            item.charge = charge
            item.amount = parseFloat(amount)
          }
          return item
        }))
      } else {
        addNewItem(charge, amount);
      }
      setCharge("")
      setAmount("")
      setEdit(false)
    } else {
      handleAlert("Enter something in the fields below")
    }
  }

  const deleteItem = (itemId) => {
    setExpenses(() => {
      return expenses.filter(item => item.id !== itemId)
    })
  }

  const editHandler = (item) => {
    setEdit(true)
    setCharge(item.charge)
    setAmount(item.amount)
    setId(item.id)
  }

  return (
    <div
      className={"bg-gray-200 h-[100vh] font-serif grid justify-center align-middle text-center text-2xl"}>
      {alert.show && <Alert text={alert.text}/>}
      <h1 className={"mb-2 mt-8 text-center text-5xl self-center"}>Budget
        Calculator</h1>
      <main
        className={"w-full bg-white grid justify-center max-h-[40em] overflow-y-scroll"}>
        <ExpenseForm charge={charge}
                     amount={amount}
                     setAmount={setAmount}
                     setCharge={setCharge}
                     handleSubmit={handleSubmit}/>
        <ExpenseList expenses={expenses}
                     deleteItem={deleteItem}
                     editHandler={editHandler}
                     clearExpenses={() => setExpenses([])}/>
      </main>
      <h1 className={"m-2 mt-4 text-4xl"}>Total spending : {" "}
        <span className={'border bg-red-500 text-white px-1 pb-2'}>
          {expenses.reduce((acc, curr) => {
            return acc += curr.amount
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
