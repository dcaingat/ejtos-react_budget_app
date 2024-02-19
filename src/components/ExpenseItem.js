import React, { useContext } from 'react';
import { TiDelete, TiMinus, TiPlus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    let _currency =  currency.split(' ');
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{_currency[0]} {props.cost}</td>
        <td><button style={{ color: '#ffffff', background: '#228b22', border: '#228b22', borderRadius: '30px'}} onClick={event=> increaseAllocation(props.name)}><TiPlus></TiPlus></button></td>
        <td><button style={{ color: '#ffffff', background: '#8b0000', border: '#8b0000' , borderRadius: '30px'}} onClick={event=> decreaseAllocation(props.name)}><TiMinus></TiMinus></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;