import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import { Link } from "react-router-dom";

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Auth from '../../../utils/auth'
import './dropdown.css'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLogout = () => {
    // 
    setAnchorEl(null);
    setOpen(true);
    setTimeout(Auth.logout(), 3000)

  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // fix this 
    setOpen(false);
  };

  return (
    <div>
      <Button className='white' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/search">Search</Link></MenuItem>
        <MenuItem onClick={handleCloseLogout}><Link to="/">Logout</Link></MenuItem>

      </Menu>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'centre',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        message="Note archived"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackBar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
//