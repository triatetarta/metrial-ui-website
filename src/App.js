import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';
import Hero from './components/Hero';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Grid container direction='column' className={classes.root}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Hero />
        </Grid>
        <Grid item container>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
