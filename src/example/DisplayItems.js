import React from "react";

import {Item} from './Item';

export const DisplayItems = (props) => {

    console.log('DisplayItems: props is',props);
    props.items.forEach( (item) => { console.log(item) } );
    
        return (
      
              <div>
          
          {props.items.length === 0 ? <h2>No items to display</h2> :
          
          
             <ul>   
               {props.items.map( item => {  return <Item key={item.key} toDisplay={item} dispatch={props.dispatch} /> } ) }
            {/*  props.items.map( (item) => { console.log("DisplayItem map:" ,item.name) } ) */}
            </ul>
              
             
             
          }
           
              </div>
      
      )
    
    
    
    } //DisplayItems