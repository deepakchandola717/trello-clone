import React, { useState } from 'react';
import {
  Paper, Typography, Button, Box,
} from '@material-ui/core';
import ListCard from './ListCard';
import useStyles from './BoardList.styles';

const BoardList = () => {
  const classes = useStyles();
  const [listCards, setListCards] = useState([]);
  return (
    <>
      <Paper variant="outlined" className={classes.listStyle}>
        <Typography className={classes.listName}>
          List Name
        </Typography>
        <Box maxHeight="67vh" overflow="auto">
          {listCards.map((card) => <ListCard />)}
        </Box>
        <Button size="small" type="button" className={classes.addAnotherCardButton}>
          + Add another card
        </Button>
      </Paper>
    </>
  );
};

export default BoardList;
