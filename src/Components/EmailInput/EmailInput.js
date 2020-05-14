import React from 'react';

import {  makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { Button , InputAdornment, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1),
    width:'100%',
    background:'#ccc',
    borderRadius:'7px'
  },
  button: {
    width:'120px',
    padding:0,
    background:'#fff',
    margin: 0
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export default function EmailInput() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="outlined" color="#fff" className={classes.button}>
                  <p style={{color:'#DC143C',fontWeight:'bold'}}>
                    SUBSCRIBE
                  </p>
                </Button>
              </InputAdornment>
            ),
          }}
          label="Email here"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
    </form>
  );
}