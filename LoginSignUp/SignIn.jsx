import React, { useState } from 'react'
import { BsMortarboardFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './styles/app.css'
import '@jehankandy/jkcss/src/layout/columns/columns.css'

const SignIn = () => {
    // for login data
    const [LoginData, SetLoginData] = useState({
        email: '',
        password: ''
    })

    // send data to backend using axios
    const headleSubmit = (e) => {
        e.preventDefault();

        // login to system
        // this will be updated in future versions
    }
  return (
    <div className='app-body'>
        <div className="line">
            <div className="rec-4"></div>
            <div className="rec-4">
                <div className="form-bg">
                    <center className='' style={{ color: 'rgb(107 114 128)' }}>
                        {/* change the Icon According to your needs */}
                        <h1 className=''><BsMortarboardFill className='logo'/></h1>
                        <p className="" style={{ paddingTop: '16px', fontSize: '24px', lineHeight: '32px' }}>Welcome Back</p>
                        <p className="">Your Project Name</p>
                    </center>
                    <hr className='my-2' style={{  }}/>
                    <div className="my-4">
                        <form onSubmit={headleSubmit}>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className=''>Email : </label>
                                <input type="email" name="" id="" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Email Address'
                                onChange={e => SetLoginData({...LoginData, email:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className=''>Password : </label>
                                <input type="password" name="" id="" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Password' 
                                onChange={e => SetLoginData({...LoginData, password:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <button type='submit' className='mt-8 font-semibold w-full py-4 px-8 rounded bg-blue-500 text-white shadow-md duration-500 hover:bg-blue-600'>SignIn</button>
                            </div>
                        </form>
                        <Link><p className="my-2 md:mx-8 text-blue-500 font-semibold">Forget Password ? </p></Link>
                    </div>
                    <hr className='my-2'/>
                    <p className="my-4">Don't have an Account ? <Link to={'/SignUp'}><span className="text-blue-500">SignUp</span></Link></p>
                </div>  
            </div>
            <div className="rec-4"></div>
        </div>
    </div>
  )
}

export default SignIn