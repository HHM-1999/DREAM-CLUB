import React from 'react';
import './Items.css';

const Items = () => {
    return (
        <div className='container mt-5 d-flex g-0'>
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 style">
                     <div className='col'>
    <div className="card ">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">Dumbells</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>For Age : 20-25</p>
                                <p>Time Required: 30s</p>
                                <button href="#" className='btn btn-primary'>Add To List</button>
      </div>
    </div>
                    </div>

                     <div className='col'>
    <div className="card ">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">Dumbells</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>For Age : 20-25</p>
                                <p>Time Required: 30s</p>
                                <button href="#" className='btn btn-primary'>Add To List</button>
      </div>
    </div>
                    </div>

                     <div className='col'>
    <div className="card ">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">Dumbells</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>For Age : 20-25</p>
                                <p>Time Required: 30s</p>
                                <button href="#" className='btn btn-primary'>Add To List</button>
      </div>
    </div>
                    </div>


                     <div className='col'>
    <div className="card ">
      {/* <img src="..." class="card-img-top" alt="..."> */}
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
             
          <div className='Drawer p-5 mt-0'>
                <h1>Humaira</h1>
                <h4>Junior Web Devoloper</h4>
                <br>
                </br>
                <h6>Add a break</h6>
                <div className='d-flex g-4'>
                    <button className='btn btn-outline-danger text-black rounded-5'>10s</button>
                    <button className='btn btn-outline-danger text-black rounded-5'>20s</button>
                    <button className='btn btn-outline-danger text-black rounded-5'>30s</button>
                    <button className='btn btn-outline-danger text-black rounded-5'>40s</button>
                    <button className='btn btn-outline-danger text-black rounded-5'>50s</button>
                </div>
                <h6>Exercise Details</h6>
                <div></div>

            </div>
        
                 
        </div>
        
           
           
    );
};

export default Items;