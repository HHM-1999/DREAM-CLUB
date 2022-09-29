import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        
    },[])
    return (
              <div className='container mt-5 g-0'>
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 style">
                     <div className='col'>
                        <div className="card ">
      {/* <img src="" class="card-img-top" alt="..."> */}
                            <div className="card-body">
                                <h5 className="card-title">Dumbells</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>For Age : 20-25</p>
                                <p>Time Required: 30s</p>
                                <button href="#" className='btn btn-primary'>Add To List</button>
                            </div>
                        </div>
                </div>

                     
            </div>
            </div>
            </div>
    );
};

export default Cards;