import React, {useState} from 'react';
import image from '../../Images/Rectangle 19.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Calculation = (props) => {
    const [calculate, setCalculate] = useState(0);

    const handlebutton = (id) => {
        // console.log(id);
        const calculate = id;
        setCalculate(calculate);
    }
    const notify = () => {
        toast("Well Done !!!!!! Activation Successful.....");
    }

    return (
        <div className='Drawer container'>
                <div>
                   
                <img src={image} alt=""></img>
                     <h4 className='m-0'> Humaira Hossain </h4>
                </div>
                <span>Junior Web Devoloper</span>
                
                <h5 className='mt-4'>Add a break</h5>
                <div className='g-5'>
                    <button className='btn btn-outline-danger text-black rounded-5' onClick={()=> handlebutton(10)}>10s</button>
                    <button className='btn btn-outline-danger text-black rounded-5' onClick={()=> handlebutton(20)}>20s</button>
                    <button className='btn btn-outline-danger text-black rounded-5' onClick={()=> handlebutton(30)}>30s</button>
                    <button className='btn btn-outline-danger text-black rounded-5'onClick={()=> handlebutton(40)}>40s</button>
                    <button className='btn btn-outline-danger text-black rounded-5'onClick={()=> handlebutton(50)}>50s</button>
                </div>
                <div>
                    <h5 className='mt-5'>Exercise Details</h5>
                    <div>
                        <span className='text-primary mt-5'>Exercise Time :</span>
                    <span>{props.duration}</span>
                    </div>
                      <div>
                        <span className='text-primary mt-5'>Break Time : </span>
                    <span>{calculate}</span>
                    </div>
                      <div className='mt-5'>
                    <button className='btn btn-primary text-white rounded-5 p-3' onClick={notify} >Activity Completed</button>
                      <ToastContainer />
                       
                                       </div>
                     
                

            </div>
        
                 
            </div>
           
    );
};

export default Calculation;