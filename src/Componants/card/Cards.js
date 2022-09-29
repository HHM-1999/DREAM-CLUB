import React  from 'react';
import Single from '../single/Single';

const Cards = (props) => {
    // console.log(props.carddata);

    const { carddata, duration, setDuration, addtocard } = props;
    // console.log(addtocard);
    
    
    // const { image, activity_name, activity_time } = props.carddata;
    // console.log(image,activity_name,activity_time);

    return (
            <div className='container mt-5 g-0'>
              <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 style">
                    {
                        carddata.map(card=>  <Single card={card} duration={duration} setDuration={setDuration} addtocard={addtocard}></Single>)
                    }
                    {/* <Single></Single>
                    <Single></Single>
                    <Single></Single>
                    <Single></Single>
                    <Single></Single>
                    <Single></Single> 
                    <Single></Single>
                    <Single></Single> */}

                 </div>     
              </div>
            </div>
           
    );
};

export default Cards;