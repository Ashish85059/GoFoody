import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [data, setData] = useState({ name: "", email: "", password: "", geolocation: "" });
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch("http://localhost:5000/api/createUser", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ "name": data.name, "email": data.email, "password": data.password, "location": data.geolocation })
          });

          // if (!response.ok) {
          //     throw new Error('Network response was not ok');
          // }

          const json = await response.json();
          console.log(json);
          if (!json.success) {
              alert("Enter valid credentials");
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
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={data.name}  onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"name='email' value={data.email} onChange={onChange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"name="password" value={data.password}onChange={onChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" name="geolocation" value={data.geolocation}onChange={onChange} />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
    <Link to="/login" className='m-3 btn btn-danger'>Already A User</Link>
</form> 
</div>
    </div>
  )
}

export default Signup