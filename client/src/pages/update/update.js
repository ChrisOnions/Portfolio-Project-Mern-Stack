import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { UPDATE_WORKORDER } from '../../utils/mutations.js';
import { useMutation } from '@apollo/client';

export default function Update(props) {

  const { id, problem } = props.location.state
  const [updateWorkOrder] = useMutation(UPDATE_WORKORDER);
  console.log(id);
  const [formState, setFormState] = useState({
    handledBy: '',
    workerComments: '',
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateWorkOrder({
        variables: {
          _id: id,
          handledBy: formState.handledBy,
          workerComments: formState.workerComments,
        }
      });
      console.log(data);
      props.history.push("/dashboard");
    } catch (err) {
      console.log(err);

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
      <div className='margin-50'>
        <h1>Maintance Update</h1 >
        <form className='formSignup'
          onSubmit={handleFormSubmit}
        ><div className='flex col'>
            <label>Referance item:  </label>
            <h3 style={{ padding: '10px 0', textDecoration: "underline" }}>{problem}</h3>
            <label>Submitted By </label>
            <TextField
              name="handledBy"
              id="outlined-multiline-static"
              multiline
              rows={1}
              placeholder="Enter Business name"
              variant="outlined"
              onChange={handleChange}
            />
            <label>Worker Comments</label>
            <TextField
              name="workerComments"
              id="outlined-multiline-static"
              multiline
              rows={3}
              placeholder="Comments"
              variant="outlined"
              onChange={handleChange}
            />
          </div>

          <Button size="large" variant='outlined' color='primary' onClick={handleFormSubmit}>Submit</Button>
        </form>
      </div>
    </div >
  )
}
