import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    minHeight: 240,
  },
});

const ImageCard = ({ title, description, imageUrl }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL + imageUrl}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {description.slice(0, 200)}...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
