import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Space } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from '../../Slices/UserSlice';


const Login = () => {
    const [email, setemail] = useState();
    const [password, setPassword] = useState();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const userData = useSelector(state => state.userInfo.value);

 

    const handleLogin = async () => {
        const data = await axios.post('http://localhost:8000/api/v1/authentication/login', {
            email: email,
            password: password,
        });
        
        if (data.data.error) {
            setError(data.data.error);
            setSuccess('');
        } else {
            if (data.data.role == 'member') {
                return setError("this Dashbord fanel is for admin & merchant")
            } else {
                setSuccess(data.data);
                navigate('/home');
                dispatch(userInfo(data.data));
                localStorage.setItem('userInfo', JSON.stringify(data.data))
            }
        }
    };

    const handleShow = () => {
        setShowPassword(!showPassword)
    };


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "600px", fontFamily: "Poppins" }}>
                Login
            </h2>
            <div className='alldiv'>
                <div style={{ position: 'absolute', width: "100%", top: "-10px" }}>

                    {
                        error
                        &&
                        <Space
                            direction="vertical"
                            style={{
                                width: '80%',
                            }}
                        >
                            <Alert message={error} type="error" showIcon />
                        </Space>
                    }
                    {
                        success
                        &&
                        <Space
                            direction="vertical"
                            style={{
                                width: '80%',
                            }}
                        >
                            <Alert message={success} type="success" showIcon />
                        </Space>
                    }
                </div>
                <div>
                    <h2 style={{ fontSize: "16px", fontFamily: "Poppins" }}>Email</h2>
                    <input style={{ fontSize: "16px", fontFamily: "Poppins" }} value={email}
                        onChange={(e) => setemail(e.target.value)} className='input' type="email" placeholder='Enter Your Email Address' />
                </div>
                <div style={{ position: 'relative' }}>
                    <h2 style={{ fontSize: "16px", fontFamily: "Poppins" }}>password</h2>
                    <input style={{ fontSize: "16px", fontFamily: "Poppins" }} value={password}
                        onChange={(e) => setPassword(e.target.value)} className='input' type={`${showPassword ? 'text' : "password"}`} placeholder='Enter your password' />
                    <div onClick={handleShow} style={{ position: "absolute", top: "50px", right: '20px' }}>
                        {
                            showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />
                        }
                    </div>
                </div>
                <div>
                    <button onClick={handleLogin} style={{
                        fontSize: "16px", fontFamily: "Poppins", fontWeight: "600", marginTop: "20px",
                        padding: " 5px 30px", width: "100%"
                    }}
                    >Login</button>
                </div>

            </div>
        </div>
    )
}

export default Login