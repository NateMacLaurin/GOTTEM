import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      color: '#FFFFFF',
      height: 48,
      textAlign: 'center'
    },
    paper: {
        color: 'Yellow'
    },
  });

function TitlePaper(props) {

    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.paper}>
            <h1 className={classes.root}>{props.title}</h1>
        </Paper>
    );
}

export default TitlePaper;