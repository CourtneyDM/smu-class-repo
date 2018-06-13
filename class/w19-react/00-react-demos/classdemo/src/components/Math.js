import React from "react";

export default class Math extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <span>{`${props.firstNum}`}</span>
    }
}