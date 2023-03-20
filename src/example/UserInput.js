import  {React,useReducer} from 'react';

import {DisplayItems} from './DisplayItems';
import styles from './UserInput.module.css';


export const ACTIONS = {
	
    ADD_ITEM: 'addItem',
    UNSELECT_ITEM: 'unselectItem',
    SELECT_ITEM: 'selectItem',
    DELETE_ITEM: 'deleteItem'
  
} //ACTIONS


/* 
	state is current state
	action - provided in dispatch function
    Note - whatever is returned is the new state.
*/
function reducer(state,action) {

	console.log('state is ', state, 'and action is', action);

	switch(action.type) {
  
  	case ACTIONS.ADD_ITEM: return [...state, addItem(action.payload)]; 
    case ACTIONS.UNSELECT_ITEM : return unselectItem(state,action.payload);  
    case ACTIONS.SELECT_ITEM :  return selectItem(state, action.payload); 
    case ACTIONS.DELETE_ITEM :  return deleteItem(state, action.payload);
    default : return state;
    
  } //switch
	

} //reducer



const selectItem = (state,payload) => {

    console.log('state is', state);
   
       return state.map( (item) => {
         
           if (item.key === payload.targetKey) {
            item.isSelected = true;
         }
         
         return item;
    
     });
   
   
   } //selectItem

   const unselectItem = (state,payload) => {

    //console.log('state is', state);
   
       return state.map( (item) => {
         
           if (item.key === payload.targetKey) {
            item.isSelected = false;
         }
         
         return item;
    
     });
   
   
   } //unselectItem
   
   const addItem = (payload) => {
   
    console.log('addItem: payload is ', payload);
   
    
        return { key: Date.now(),  name: payload.name, day: payload.day }
    
    
    } //addItem
   
   
   const deleteItem = (state,payload) => {
   
   console.log('deleted item payload is ', payload);

        return state.filter( item => item.key !== payload.targetKey)
   
   } //deleteItem
   
export const UserInput = _ => {

    let state, dispatch;

	[state, dispatch]  = useReducer( reducer, []);



    const processFormData = (e) => {
   
        e.preventDefault();
        console.log('data is', e.target.selectDay.value, e.target.textBoxName.value);
      
      
      /* 
       Here is where you can essentially deal with name and day in one fell swoop.  
       You can/could manage various stateful variables in the payload all under control of the reducer function.
       This obviates the need to juggle indepdently declared stateful variables. 
      */
      dispatch( { type: ACTIONS.ADD_ITEM, payload: { name: e.target.textBoxName.value, day: e.target.selectDay.value  } } );
    
    } //processFormData


 return (
	<div id={styles.form}>

    <form onSubmit={processFormData}>
      <input type="text" id="inputText" name="textBoxName" placeholder="User name"></input>
      <select name="selectDay" id="selectDay">
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
         <option value="Sunday">Sunday</option>
      </select>
      
      <button type="submit">Submit</button>

    </form>
    
    <DisplayItems items={state} dispatch={dispatch}/>
  
  </div>
 
 )

} //UserInput