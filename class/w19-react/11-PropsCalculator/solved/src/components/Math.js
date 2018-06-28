import React from "react";


const Math = props => {
     let value;
     console.log(props.operator);
     switch (props.operator) {
          case "+":
               value = props.num1 + props.num2;
               break;
          case '-':
               value = props.num1 - props.num2;
               break;
          case '*':
               value = props.num1 * props.num2;
               break;
          case '/':
               value = props.num1 / props.num2;
               break;
          default:
               value = "unknown";
               break;
     }

     return <span style={ { fontSize: value } }>{ value }</span>
};

export default Math;