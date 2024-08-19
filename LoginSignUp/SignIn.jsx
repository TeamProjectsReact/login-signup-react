import React, { useState } from 'react'
import { BsMortarboardFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage";
import './styles/app.css'
import '@jehankandy/jkcss/src/layout/columns/columns.css'
import '@jehankandy/jkcss/src/buttons/button.css'

const SignIn = () => {
    const navigate = useNavigate()
    // for login data
    const [LoginData, SetLoginData] = useState({
        email: '',
        password: ''
    })

    // send data to backend using axios
    const headleSubmit = async (e) => {
        e.preventDefault();

        // login to system

        try{
            const res = await axios.post('http://localhost:8081/auth/SignIn', LoginData)

            const loginToken = res.data.Token;

            //store token in localstorage
            localStorage.setItem('LoginToken', loginToken)

            if(res.data.Status === "Success"){
                alert("Login Successfull")
                localStorage.setItem('token', res.data.Token)
                navigate('/Dashboard')
                // login user Email 
                secureLocalStorage.setItem('Login1', res.data.Result.email)
                secureLocalStorage.setItem('Login2', res.data.Result.Role)
            }
            else{
                alert(res.data.Error)
            }
        }
        catch (err) {
            console.log(err)
        }
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
                    <hr className='' style={{ marginTop: '8px', marginBottom: '8px' }}/>
                    <div className="" style={{ marginTop: '16px', marginBottom: '16px' }}>
                        <form onSubmit={headleSubmit}>
                            <div className="input-area">
                                <label htmlFor="" className=''>Email : </label>
                                <input type="email" name="" id="" className="feild-input" required placeholder='Enter Email Address'
                                onChange={e => SetLoginData({...LoginData, email:e.target.value})}/>
                            </div>
                            <div className="input-area">
                                <label htmlFor="" className=''>Password : </label>
                                <input type="password" name="" id="" className="feild-input" required placeholder='Enter Password' 
                                onChange={e => SetLoginData({...LoginData, password:e.target.value})}/>
                            </div>
                            <div className="input-area">
                                <button type='submit' className='jkbtn jkbtn-blue' style={{ width: '100%', marginTop: '2rem' }}>SignIn</button>
                            </div>
                        </form>
                        <Link><p className="link-text">Forget Password ? </p></Link>
                    </div>
                    <hr className='' style={{ marginTop: '8px', marginBottom: '8px' }}/>
                    <p className="" style={{ marginTop: '16px', marginBottom: '16px' }}>Don't have an Account ? <Link to={'/SignUp'}><span className="" style={{ color: 'rgb(59 130 246)' }}>SignUp</span></Link></p>
                </div>  
            </div>
            <div className="rec-4"></div>
        </div>
    </div>
  )
}

export default SignIn