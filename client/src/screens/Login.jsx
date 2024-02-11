import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": data.email, "password": data.password })
      });

      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }

      const json1 = await response.json();
      console.log(json1);
      if (!json1.success) {
        alert("Enter valid credentials");
      }
      else{
        localStorage.setItem("userEmail",data.email);
        localStorage.setItem("authToken",json1.authToken);
        console.log(localStorage.getItem("authToken"))
        navigate("/")
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Handle error accordingly, such as showing an error message to the user
    }
  }

  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={data.email} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={data.password} onChange={onChange} />
          </div>


          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/createuser" className='m-3 btn btn-danger'>I am a new user</Link>
        </form>
      </div>
    </div>
  )
}

export default Login