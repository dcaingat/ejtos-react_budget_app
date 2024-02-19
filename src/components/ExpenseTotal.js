import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { currency } = useContext(AppContext);
    let _currency =  currency.split(' ');
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {_currency[0]} {totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
