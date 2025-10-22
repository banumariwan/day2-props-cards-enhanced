import React, { useState } from "react";


function Counter(){
const [count,setCount] = useState(0);



const handleIncrease = () => setCount(count + 1);
const handleDecrease = () => setCount(count - 1);
const handleReset = () => setCount(0);



return(
<div style={styles.container}>
      <h2>Counter App</h2>
      <h3>{count}</h3>

      <div>
      <button style={styles.btn} onClick={handleIncrease}>+</button>
        <button style={styles.btn} onClick={handleDecrease}>−</button>
        <button style={styles.btn} onClick={handleReset}>Reset</button>
      </div>
</div>
);
}


const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  btn: {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Counter;