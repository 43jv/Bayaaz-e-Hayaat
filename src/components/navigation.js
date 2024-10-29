import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ffffff', 
  },
  title: {
    fontFamily: 'Craw Modern Bold',
    color: '#8b4513', 
    fontSize: '24px',
    fontWeight: 'bold',
    flexGrow: 1,
  },
  link: {
    fontFamily: 'Craw Modern Bold',
    color: '#8b4513',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    position: 'relative',
    outline: 'none', // Remove focus outline
    display: 'inline-block', // Align links horizontally
    marginRight: '20px', // Add some space between the links
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '2px',
      backgroundColor: 'black',
      transform: 'scaleX(0)',
      transition: 'transform 0.3s ease-in-out',
    },
    '&:hover': {
      color: 'black', // Keep text color black on hover
      '&:after': {
        transform: 'scaleX(1)',
      },
    },
  },
  listItem: {
    listStyle: 'none', // Remove bullet points
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

export default function NavBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            <Typography className={classes.title}>
            BAYĀZ-E-HAYĀT
            </Typography>
            <li className={classes.listItem}><Link to="/" className={classes.link}>Home</Link></li>
            <li className={classes.listItem}><Link to="/about" className={classes.link}>About Us</Link></li>
            <li className={classes.listItem}><Link to="/author" className={classes.link}>Authors</Link></li>
            <li className={classes.listItem}><Link to="/SearchBar" className={classes.link}>Search</Link></li>
          
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}