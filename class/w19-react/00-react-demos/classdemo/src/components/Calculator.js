import React from "react";
import Math from "./Math";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
const Calculator = () => (
    <div>
        <p>
            19 + 341 = <Math firstNum={19} />
        </p>
        <p>
            42 - 17 = <Math firstNum={42} />
        </p>
        <p>
            100 * 3 = <Math firstNum={100} />
        </p>
        <p>
            96 / 4 = <Math firstNum={96} />
        </p>
    </div>
);

export default Calculator;
