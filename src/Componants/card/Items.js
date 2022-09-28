import React from 'react';
import './Items.css';

const Items = () => {
    return (
        <div className='container mt-4 d-flex'>
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
                    
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

            
            </div>
            <div className='Drawer'>
                <h2>order</h2>

            </div>
            </div>
           
    );
};

export default Items;