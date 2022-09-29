import React, {useState, useEffect} from 'react';
import Calculation from '../calculation/Calculation';
import Cards from '../card/Cards';

import './Wrap.css';

const Wrap = () => {

    const [card, setCard] = useState([]);
    
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
        .then(data =>setCard(data))


    }, [])
    const [duration, setDuration] = useState(0);
    const addtocard = (addcard) => {
        // console.log("clicked", addcard);
        const newtime = duration + parseInt(addcard);
        console.log(newtime);
        setDuration(newtime);
        
        
    }
        
    
    return (
        <div className='d-flex container justify-content-between'>
            <Cards carddata={card} duration={duration} setDuration={setDuration} addtocard={addtocard}></Cards>
            
            <Calculation duration={duration}></Calculation>
        </div>
    );
};

export default Wrap;