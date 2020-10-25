import React from 'react';
import { Button, makeStyles, Typography, AppBar, Toolbar } from '@material-ui/core';




const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  titleStyle: {
    fontStyle: 'oblique',
    fontVariant: ''

  }
});

function App()
{
  const classes = useStyles();
  return (
    <>
      <div className="App" >
        <Typography className={classes.titleStyle} variant="h1" color="secondary">Intro to Material UI</Typography>
        <Button variant="outlined" color="secondary">Good Vibes!</Button>
        <Button variant="contained" color="primary">Atalaskan</Button>
        <Button variant="outlined" color="secondary">
          <Typography variant="h2" color="initial"> helloko </Typography>
        </Button>
      </div>
    </>)
}

export default App;
