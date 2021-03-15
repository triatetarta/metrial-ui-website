import { Grid } from '@material-ui/core';
import React from 'react';
import ImageCard from './ImageCard';
import { makeStyles } from '@material-ui/core/styles';
import places from '../static/places';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      {places.map((place, index) => {
        return (
          <Grid key={index} item xs={12} sm={4}>
            <ImageCard {...place} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Content;
