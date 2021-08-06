import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { ADD_WORK_ORDER } from '../../utils/mutations.js';
import { useMutation } from '@apollo/client';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORY } from '../../utils/queries';
import './maintenance.css'


export default function Maintenance(props) {

  const [formState, setFormState] = useState({ category: '', problem: '', reply: true, statusOpen: true });
  const [addWorkOrder] = useMutation(ADD_WORK_ORDER);
  const [anchorEl, setAnchorEl] = useState(null);

  const { loading, data } = useQuery(QUERY_CATEGORY);
  const categorys = data?.getCategory || [];

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addWorkOrder({
        variables: {
          category: formState.category,
          problem: formState.problem,
          reply: formState.reply
        }
      });
      console.log(data);
      props.history.push("/dashboard");
    } catch (err) {
      console.log(err);

    }
  }
  const radialChange = (event) => {
    setFormState({ ...formState, reply: event.target.value.toLowerCase() === "true" })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const changeelement = (event) => {
    var element = document.getElementById('selectedItem');
    setFormState({ ...formState, category: event.target.innerText })
    element.innerHTML = event.target.innerText
    handleClose(element)
    return
  }

  return (
    <div className="sizeContainer">
      <div className='margin-50'>
        <h1>Maintance Request Form</h1 >
        <form
          className='formSignup'
          onSubmit={handleFormSubmit}
        >
          <div className='flex col'>
            <label style={{ fontSize: "30px" }}>Category</label>
            <Button value={formState.category} style={
              {
                border: '1px solid #cdcdcd',
              }
            }
              className='simpleMenu text-black' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
              Choose
            </Button >
            <Menu
              name="category"
              variant="outlined" color="primary"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {loading ? (<div>Loading...</div>) :
                categorys.map((category) => (
                  <MenuItem onClick={changeelement} key={category.name}>{category.name}</MenuItem>
                ))}
            </Menu>
            <div id='selectedItem'></div>
            <label> Description </label>
            <TextField
              name="problem"
              id="outlined-multiline-static"
              multiline
              rows={5}
              placeholder="Please Be as descriptive as possible"
              variant="outlined"
              onChange={handleChange}
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Would you like to receive a reply? *</FormLabel>
              <RadioGroup aria-label="gender" name="reply" value={formState.reply} onChange={radialChange}>
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <label>Contact Number</label>
            <input
              name="Number"
              type="text"
              placeholder="Mobile"
              className="form-input "
              style={{ lineHeight: '1.5' }}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" style={{
            background: "var(--article-color1)",
            borderradius: "10px",
            color: "white",
            border: "none",
            textdecoration: "none"
          }}  >Submit</Button>
        </form>
      </div>
    </div >
  )
}

// populate name address of user
