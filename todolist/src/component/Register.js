import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Validation from './RegisterValidation'
import axios from 'axios';

const Register = () => {

  const [values, setValues] = useState({
    name:'',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  
  const handleonSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  
    // Check if there are no validation errors
    if (!errors.name && !errors.email && !errors.password) {
      // Send the sign-up data to the server
      axios.post('http://localhost:8081/signup', values)
        .then((res) => {
          // Handle successful sign-up (insertion into the database)
          console.log('Sign-up successful', res.data);
  
          // Redirect to the sign-in page
          navigate('/'); // Adjust the route as needed
        })
        .catch((err) => {
          // Handle errors from the server (e.g., display an error message)
          console.error('Sign-up error', err);
        });
    }
  };

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    console.log(event)
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value, // Corrected to set the value directly
    }));
  };

  return (
    <div className="center">
    <input type="checkbox" id="show" />
    <label htmlFor="show" className="show-btn">Welcome</label>
    <div className="container">
      <label htmlFor="show" className="close-btn"></label>
      <div className="text">Login Form</div>
      <form action="#" onSubmit={handleonSubmit}>
      <div className="data">
          <label>Name</label>
          <input
            type="name"
            name="name"
            value={values.name}
            onChange={handleInput} 
          required
     placeholder='Enter your password'
          />
        </div>
        <div className="data">
          <label>Email or Phone</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleInput} 
            required placeholder='Enter your email'
          />
        </div>
        <div className="data">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleInput} 
          required
     placeholder='Enter your password'
          />
        </div>
        
        <div className="btn">
          <div className="inner"></div>
          <button type="submit" >SignUP</button>
        </div>
        <div className="signup-link">
        Already have an account? <Link to="/">SignIn now</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register

