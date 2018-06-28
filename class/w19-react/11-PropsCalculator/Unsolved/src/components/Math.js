import React from "react";

class Math extends React.Component {
     constructor(props) {
          super(props);
     }

     render() {
          console.log(this.props);
          return <span>{ props.children }</span>
     }
}

export default Math;