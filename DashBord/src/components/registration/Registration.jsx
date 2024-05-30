import axios from 'axios';
import React, { useState } from 'react'
import { Alert, Space } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';


const Registration = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setemail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [showPassword, setShowPassword] = useState(false);


    const handleClick = async () => {
        const data = await axios.post('http://localhost:8000/api/v1/authentication/registration', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password,
        });
        if (data.data.error) {
            setError(data.data.error);
            setSuccess('')
        } else {
            setSuccess(data.data);
            setError('')
            setFirstName('');
            setLastName('');
            setemail('');
            setPhone('');
            setPassword('');
        }

    };

    const handleShow = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", }}>
            <div className='alldiv'>
                <h2 style={{textAlign:"center",fontSize:"20px",fontFamily:"Poppins"}}>
                    Registration
                </h2>
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
                    <h2 style={{ fontSize: "16px", fontFamily: "Poppins" }}>First Name</h2>
                    <input style={{ fontSize: "16px", fontFamily: "Poppins" }} value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} className='input' type="frist name" placeholder='Enter your Frist Name' />
                </div>
                <div>
                    <h2 style={{ fontSize: "16px", fontFamily: "Poppins" }}>Last Name</h2>
                    <input style={{ fontSize: "16px", fontFamily: "Poppins" }} value={lastName}
                        onChange={(e) => setLastName(e.target.value)} className='input' type="last name" placeholder='Enter your last Name' />
                </div>
                <div>
                    <h2 style={{ fontSize: "16px", fontFamily: "Poppins" }}>Email</h2>
                    <input style={{ fontSize: "16px", fontFamily: "Poppins" }} value={email}
                        onChange={(e) => setemail(e.target.value)} className='input' type="email" placeholder='Enter Your Email Address' />
                </div>
                <div>
                    <h2 style={{ fontSize: "16px", fontFamily: "Poppins" }}>Phone</h2>
                    <input style={{ fontSize: "16px", fontFamily: "Poppins" }} value={phone}
                        onChange={(e) => setPhone(e.target.value)} className='input' type="phone" placeholder='Enter Your Email phone' />
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
                    <button onClick={handleClick} style={{
                        fontSize: "16px", fontFamily: "Poppins", fontWeight: "600", marginTop: "20px",
                        padding: " 5px 30px", width: "100%"
                    }}
                    >Registration</button>
                </div>

            </div>
        </div>
    )
}

export default Registration