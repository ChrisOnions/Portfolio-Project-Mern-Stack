import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations.js';
import Auth from '../../utils/auth';
import './signup.css'


export default function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="sizeContainer">
      <div className="signupContainer">
        <h1>Signup here</h1 >

        <form onSubmit={handleFormSubmit}>
          <div className='flex col'>
            <label>First Name</label>
            <input
              name="firstName"
              placeholder="First "
              className="form-input "
              style={{ lineHeight: '1.5' }}
              onChange={handleChange}
            />
            <label>Last Name</label>
            <input
              name="lastName"
              placeholder="Last "
              className="form-input "
              style={{ lineHeight: '1.5' }}
              onChange={handleChange}
            />
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Email@Mail.com"
              className="form-input "
              style={{ lineHeight: '1.5' }}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="******"
              className="form-input "
              style={{ lineHeight: '1.5' }}
              onChange={handleChange}
            />

            <label>Confirm Password </label>
            <input
              name="PasswordConfirm"
              type="Password"
              placeholder="******"
              className="form-input "
              style={{ lineHeight: '1.5' }}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <button href='/'>Back</button>
      </div>
    </div >
  );
}
