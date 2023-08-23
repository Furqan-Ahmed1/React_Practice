// { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

  //const [title,setTitle] = useState(props.title);

  // const changeTitle = () =>{
  //   setTitle("Changed!")
  // }
  
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h4>{props.title}</h4>
      </div>
      <div className='expense-item__price'>${props.amount}</div>
      {/* <button onClick={changeTitle}>Change Title</button> */}
    </div>
  );
}

export default ExpenseItem;
