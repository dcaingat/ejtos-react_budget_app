
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency } = useContext(AppContext);
    let _currency =  currency.split(' ');
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(newBudget > 20000) {
            alert("The value cannot exceed " + _currency[0] + " 20,000");
            return;
        }

        if(newBudget <= totalExpenses) {
            //setNewBudget(newBudget - 10);
            alert("You cannot reduce the budget value lower than the spending.")
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {_currency[0]}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;