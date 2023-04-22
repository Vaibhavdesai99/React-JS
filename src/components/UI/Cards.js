import React from 'react'

import './Cards.css'

//children is reserved name :-
const Cards = (props) => {


  //concatenating the className prop with the string 'Card' : should add space space after 'Card '   otherwise it wont work.
  //Adding a space between the className prop and the string 'Card' is necessary because CSS class names are separated by spaces
  const classes = 'Card ' + props.className;


  return(
  
  <div className={classes}>{props.children}</div> 
  );

    

     
  

}
export default Cards