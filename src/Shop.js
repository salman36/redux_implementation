import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';

export default function Shop() {
  const dispatch = useDispatch();
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        <h1>Deposit/Withdraw Money</h1>
      {/* <button className='btn btn-primary mx-2' onClick={()=> {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
       Update Balance
      <button className='btn btn-primary mx-2' onClick={()=> {dispatch(actionCreators.depositMoney(100))}}>+</button> */}
      <button className='btn btn-primary mx-2' onClick={()=> {withdrawMoney(100)}}>-</button>
       Update Balance
      <button className='btn btn-primary mx-2' onClick={()=> {depositMoney(100)}}>+</button>
    </div>
  )
}
