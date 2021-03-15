import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbar: {
    background: 'none',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  appbarTitle: {
    flexGrow: 1,
  },
  colorText: {
    color: '#5AFF3D',
  },
  title: {
    color: '#fff',
    fontSize: '3rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' alignItems='center'>
        <Grid
          item
          container
          justify='center'
          alignItems='center'
          direction='column'
        >
          <h1 className={classes.title} align='center'>
            Welcome to <br /> My
            <span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
