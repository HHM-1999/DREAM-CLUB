import React from 'react';
import './Ques2.css';

const Ques2 = () => {
    return (
        <div className='container'>
        <h3>2. Difference between props and state? </h3>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
        </div>
    );
};

export default Ques2;