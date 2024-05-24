import React, { useState, useEffect } from "react";

const UseEffects = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("Component is Running");

    return () => {
        console.log("cleaning Counters");
    }
  },[count2]);

//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => console.log(data));
//   }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
  
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized');
    };
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <h1>UseEffects</h1>
    <div className="d-flex justify-content-center">
      <div className="m-5">
      <button className="btn btn-success" onClick={(() => { setCount1(count1+1)})}>Increment1</button>
      <h3>Count : {count1}</h3>
      <button className="btn btn-danger" onClick={(() => { setCount1(count1-1)})}>Decrement1</button>
      </div>
      <div className="m-5">
      <button className="btn btn-success" onClick={(() => { setCount2(count2+1)})}>Increment2</button>
      <h3>Count : {count2}</h3>
      <button className="btn btn-danger" onClick={(() => { setCount2(count2-1)})}>Decrement2</button>
      </div>
    </div> 
    </div>
  );
};

export default UseEffects;
