import React,{useState} from 'react';
import axios from 'axios';

const Register = () => {

    const [data, setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })

    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', data).then(
            res => alert(res.data)
        )
    }

  return (
    <div>
    <center>
        <form onSubmit={submitHandler}>
            <h3>Register</h3>
            <input type="text" onChange={changeHandler} placeholder="User name" name="username" /><br />
            <input type="email" onChange={changeHandler} placeholder="Email" name="email" /><br />
            <input type="password" onChange={changeHandler} placeholder="password" name="password" /><br />
            <input type="password" onChange={changeHandler} placeholder="confirm password" name="confirmpassword" /><br />
            <input type="submit" value="Register" /><br />
        </form>
        </center>
    </div>

  )
}

export default Register