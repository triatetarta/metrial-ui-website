import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles(() => ({
  root: {
    background: 'none',
  },

  typographyStyles: {
    flex: 1,
  },
  menuIcon: {
    color: '#fff',
  },
  spanStyles: {
    color: '#5AFF3D',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root} elevation={0}>
      <Container maxWidth='lg'>
        <Toolbar>
          <Typography variant='h4' className={classes.typographyStyles}>
            My<span className={classes.spanStyles}>Island.</span>
          </Typography>
          <IconButton>
            <SortIcon className={classes.menuIcon} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
