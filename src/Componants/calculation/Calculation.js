import React, { useEffect, useState } from 'react';
import image from '../../Images/Rectangle 19.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Calculation = (props) => {

    const [calculate, setCalculate] = useState(0);


    const handlebutton = (id) => {
        // console.log(id);
        const calculate = id;
        setCalculate(calculate);
        localStorage.setItem('BreakTime', calculate);
    }

    ///TOAST
    const notify = () => {
        toast("Well Done !!!!!! Activation Successful.....");
    }

    // ///LOCAL  sTORAGE

    useEffect(() => {
        const getBreakTime = localStorage.getItem('BreakTime');
        setCalculate(getBreakTime ? getBreakTime : 0);
    }, [])

    // const getTime = () => {
    //     let time = localStorage.getTime('BreakTime');
    //     console.log(time);
    //     if (time) {
    //         return JSON.parse(localStorage.getItem('BreakTime'));
    //     }
    //     else {
    //         return [];
    //     }
    //     getTime();
    // }

    // useEffect(() => {
    //     localStorage.setItem('BreakTime ', JSON.stringify(calculate));
    // }, [calculate]);

    return (
        <div className='Drawer container px-5 mt-5'>
            <div className='d-flex g-3'>

                <img src={image} alt=""></img>
                <h4 className='m-0 px-2'> <b> Humaira Hossain</b> </h4>
            </div>
            <span className='text-secondary px-5 mt-5'><b>Junior Web Developer</b></span>

            <h5 className='mt-4'>Add a break</h5>
            <div className='g-5'>
                <button className='btn btn-outline-dark text-danger rounded-5' onClick={() => handlebutton(10)}><b>10s</b></button>
                <button className='btn btn-outline-dark text-danger rounded-5' onClick={() => handlebutton(20)}><b>20s</b></button>
                <button className='btn btn-outline-dark text-danger rounded-5' onClick={() => handlebutton(30)}><b>30s</b></button>
                <button className='btn btn-outline-dark text-danger rounded-5' onClick={() => handlebutton(40)}><b>40s</b></button>
                <button className='btn btn-outline-dark text-danger rounded-5' onClick={() => handlebutton(50)}><b>50s</b></button>
            </div>
            <div>
                <h5 className='mt-5'>Exercise Details</h5>
                <div>
                    <span className='text-primary mt-5 '>Exercise Time : </span>
                    <span>{props.duration}h</span>
                </div>
                <div>
                    <span className='text-primary mt-5'>Break Time : </span>
                    <span>{calculate}s</span>
                </div>
                <div className='mt-5'>
                    <button className='btn btn-success text-white rounded-5 p-3' onClick={notify} >Activity Completed</button>
                    <ToastContainer />

                </div>



            </div>


        </div>

    );
};

export default Calculation;