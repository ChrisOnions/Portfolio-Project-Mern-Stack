import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import './footer.css'
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import HomeIcon from '@material-ui/icons/Home';
import auth from '../../utils/auth';
export default function Footer() {

  const useStyles = makeStyles({
    root: {
      width: 300,
      justifyContent: 'center',
      backgroundColor: 'var(--header-footer-color);',

    },
    button: {
      color: 'white',
    }
  });
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <footer className=" flex container center">
      <div className="margin-5">
        {auth.loggedIn() ?
          <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction className={classes.button} href='/' label="home" value="home" icon={<HomeIcon className={classes.button} />} />
            <BottomNavigationAction className={classes.button} href='/dashboard' label="Dashboard" value="Dashboard" icon={<DashboardIcon className={classes.button} />} />
            <BottomNavigationAction className={classes.button} href='/settings' label="settings" value="settings" icon={<SettingsIcon className={classes.button} />} />
            <BottomNavigationAction className={classes.button} href='/call' label="Call" value="Call" icon={<PhoneCallbackIcon className={classes.button} />} />
          </BottomNavigation> :
          <div>Feet Go here</div>}
      </div>
    </footer>
  );
}
