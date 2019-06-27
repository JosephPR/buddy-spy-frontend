import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import '../App.css'



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" id="nav">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Todo App
            </Typography>
            <Link id="about" to="/about">About</Link>
          </Toolbar>
        </AppBar>
      </div>
    </Router>

  );
}
