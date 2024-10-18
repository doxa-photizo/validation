import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'


const SignUp = ({ setIsLoggedIn }) => {
    const [values,setValues] = useState(
        {username:'',email:'',password:''}    
    )
    
    const [error,setError] = useState(
        {username:'',email:'',password:''}
    )


    const validate = () => {
        let isValid = true;
        let error = {};


        if (!values.username) {
            error.username = 'Username is required';
            isValid = false;
          }

          
        if (!values.email){
          error.email = "email is required";
            isValid = false; 
        } 
        else if (!/\S+@\S+\.\S+/.test(values.email)){
            error.email = 'email is invalid';
            isValid = false;

        }

        if(!values.password){
            error.password ='password is required';
            isValid=false;

        }
        else if (values.password.length<8){
            error.password = 'password should be 8 or more';
            isValid=false;
        }
setError(error);
return(isValid);


    }
   
    const handleChange = (e)=>{
        
  setValues({ ...values, [e.target.name]: e.target.value });
       

    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          setIsLoggedIn(true);
        }
      };






  return (
    <div>
      
      <form className='loginforms' onSubmit={handleSubmit}>
      <label className="Username">
          Username:
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {error.username && <div style={{ color: 'red' }}>{error.username}</div>}
        </label>

        <label className='Email'>
  Email:
  <input
    type='email'
    name='email'
    value={values.email}
    onChange={handleChange}
  />
  {error.email && <div style={{ color: 'red' }}>{error.email}</div>}
</label>

<label className='Password'>
  Password:
  <input
    type='password'
    name='password'
    value={values.password}
    onChange={handleChange}
  />
  {error.password && <div style={{ color: 'red' }}>{error.password}</div>}
</label>

<button type='submit'>
    SignUp
</button>

<Link to = '/Login'>
  go to Login
</Link>


      </form>


    </div>
  )
}

export default SignUp
