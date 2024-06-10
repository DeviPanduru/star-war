import React,{useState} from 'react';
import axios from 'axios';

const Login = () => {

    const [data, setData] = useState({
        
        email:'',
        password:'',
        
        
    })

    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:3004/login', data).then(
            res => alert(res.data)
        )
    }

  return (
    <div>
    <center>
        <form onSubmit={submitHandler}>
            <h3>Login</h3>
            <input type="email" onChange={changeHandler} placeholder="Email" name="email" /><br />
            <input type="password" onChange={changeHandler} placeholder="password" name="password" /><br />
            <input type="submit" value="Register" /><br />
        </form>
        </center>
    </div>

  )
}

export default Login