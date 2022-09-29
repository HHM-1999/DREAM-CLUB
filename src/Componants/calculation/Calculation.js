import React from 'react';
import image from '../../Images/Rectangle 19.png';

const Calculation = () => {
    return (
        <div className='Drawer container p-5 mt-5'>
                <div>
                   
                <img src={image} alt=""></img>
                     <h4 className='m-0'> Humaira Hossain </h4>
                </div>
                <span>Junior Web Devoloper</span>
                
                <h5 className='mt-4'> Add a break</h5>
                <div className='g-5'>
                    <button className='btn btn-outline-danger text-black rounded-5'>10s</button>
                    <button className='btn btn-outline-danger text-black rounded-5'>20s</button>
                    <button className='btn btn-outline-danger text-black rounded-5'>30s</button>
                    <button className='btn btn-outline-danger text-black rounded-5'>40s</button>
                    <button className='btn btn-outline-danger text-black rounded-5'>50s</button>
                </div>
                <div>
                    <h5 className='mt-5'>Exercise Details</h5>
                    <div>
                        <span className='text-primary mt-5'>Exercise Time : </span>
                        <span>0</span>
                    </div>
                      <div>
                        <span className='text-primary mt-5'>Break Time : </span>
                         <span>0</span>
                    </div>
                      <div className='mt-5'>
                        <button className='btn btn-primary text-white rounded-5 p-3' id='liveliveToastBtn'>Activity Completed</button>
                        <div class="toast-container position-fixed bottom-0 end-0 p-3">
                        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
     
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                             Congratualation!!!!! All are completed......
                        </div>
                             </div>
                                  </div>
                                       </div>
                     
                

            </div>
        
                 
            </div>
           
    );
};

export default Calculation;