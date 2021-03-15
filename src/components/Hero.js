import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
  typoStyle: {
    color: '#fff',
  },
  spanText: {
    color: '#5AFF3D',
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Grid item>
        <Typography variant='h3' className={classes.typoStyle} align='center'>
          Welcome to <br />
          <span className={classes.spanText}>MyIsland.</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Hero;
