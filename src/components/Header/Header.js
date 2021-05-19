import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



export const Header = () => {
  const classes = useStyles();
  const userName = useSelector(state => state.profile.profileName);
  console.log(userName);
  const [lastItem] = userName.slice(-1)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">Chat List</Link>
            <Link className={classes.link} to="/profile">Profile</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Hello, {lastItem}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};



