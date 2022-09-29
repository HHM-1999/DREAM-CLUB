import React from 'react';
import './Single.css';

const Single = (props) => {
    // console.log(props);
    const { duration, setDuration, addtocard } = props;
    const { image, activity_name, activity_time } = props.card;
    // console.log(addtocard);
    return (
        <div>
             <div className='col'>
                        < div className="card ">
                            <img src={image} class="card-img-top" alt="..."/>
                            <div className="card-body">
                        <h6 className="card-title">{activity_name}</h6>
                        <p>Time Required:{activity_time}</p>
                        <button href="#" className='btn btn-primary' onClick={()=> addtocard(activity_time)} >Add To List</button>
                        
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Single;