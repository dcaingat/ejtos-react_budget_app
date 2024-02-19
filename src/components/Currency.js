import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Currency = () => {
  const {dispatch } = useContext(AppContext);
  const { currency } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }


    

  return (

    <>
      {['Currency ' + currency].map(
        (variant) => (
          <DropdownButton
            className='alert alert-success'
            key={variant}
            id={`dropdown-split-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item value="$ Dollar" onClick={event=>changeCurrency("$ Dollar")}>$ Dollar</Dropdown.Item>
            <Dropdown.Item value="£ Pound" onClick={event=>changeCurrency("£ Pound")}>£ Pound</Dropdown.Item>
            <Dropdown.Item value="₹ Ruppe" onClick={event=>changeCurrency("₹ Ruppe")}>₹ Ruppe</Dropdown.Item>
            <Dropdown.Item value="€ Euro" onClick={event=>changeCurrency("€ Euro")}>€ Euro</Dropdown.Item>
          </DropdownButton>
        ),
      )}
    </>
    /*
        <div className='alert alert-success'> 
       <TiArrowDown size='1.5em' onClick={event=>showCurrencies("")}></TiArrowDown>
         
         
      <select  name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$ Dollar">$ Dollar</option>
        <option value="£ Pound">£ Pound</option>
        <option value="₹ Ruppe">₹ Ruppe</option>
        <option value="€ Euro">€ Euro</option>
      </select>	
      
      
    </div>

*/
    );
};

export default Currency;