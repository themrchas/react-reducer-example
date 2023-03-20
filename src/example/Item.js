import  React from 'react';

import {ACTIONS} from './UserInput';
import styles from './Item.module.css';


export const Item = (props) => {


	console.log("Item props", props);
    

	return (
  
  <div>
  
  
  <li className={props.toDisplay.isSelected ? styles.selected : undefined}>{props.toDisplay.name} 
  
    <button type="button" onClick={() => { props.dispatch( {type:ACTIONS.SELECT_ITEM, payload: { targetKey: props.toDisplay.key } } ) } }>Select</button>
    <button type="button" onClick={() => { props.dispatch( {type:ACTIONS.UNSELECT_ITEM, payload: { targetKey: props.toDisplay.key } } ) } }>Deselect</button>
    <button type="button" onClick={() => { props.dispatch( {type:ACTIONS.DELETE_ITEM, payload: { targetKey: props.toDisplay.key } } ) } }>Delete</button>
   </li> 
    </div>
    
  )

} //Item