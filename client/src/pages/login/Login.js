import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";
import "../signup/signup.css"
import Button from '@material-ui/core/Button';
function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("first hit");
    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      console.log('happy path');
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log('unhappy path');
      console.error(err);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="sizeContainer">
      <div className="signupContainer borderbox">
        <h1>Login</h1 >
        <form
          className='formSignup'
          onSubmit={handleFormSubmit}
        >
          <div className='flex col'>
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Email@Mail.com"
              className="form-input "
              style={{ lineHeight: '1.5' }}
              onChange={handleChange}
            />
            <label>Password </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="form-input "
              style={{ lineHeight: '1.5' }}
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
          <Button variant="contained" color="primary" aria-controls="simple-menu" aria-haspopup="true" type="submit" >Login</Button>

        </form>
        <br></br>
        <div className="noticeText">No account Signup here</div>
        <Link color="primary" className="button" to="/signup">Signup</Link>

      </div>
    </div >
  );
}

export default Login;

// mkanatalexander@techfriends.dev
// password01