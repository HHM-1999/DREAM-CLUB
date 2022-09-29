import React from 'react';
import './Ques3.css';

const Ques3 = () => {
    return (
          <div className='container'>
            <h3 className='text-primary'>3. What does use state do without dataload ? </h3>
            <p>useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application. In React, all the code we write is defined inside a component.</p>
        </div>
    
    );
};

export default Ques3;