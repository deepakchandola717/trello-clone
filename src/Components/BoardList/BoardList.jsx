/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Paper, Typography, Button, Box,
} from '@material-ui/core';
import ListCard from './ListCard';
import useStyles from './BoardList.styles';
import { getCardsOnList } from '../../Services/services';

const BoardList = (props) => {
  const { listData } = props;
  const classes = useStyles();
  const [listCards, setListCards] = useState([]);

  const getCardsForList = (listId) => {
    getCardsOnList(listId)
      .then((res) => {
        setListCards(res);
      });
  };

  useEffect(() => {
    getCardsForList(listData.id);
  }, []);

  return (
    <>
      <Paper variant="outlined" className={classes.listStyle}>
        <Typography className={classes.listName}>
          {listData && listData.name}
        </Typography>
        <Box maxHeight="67vh" overflow="auto">
          {listCards.map((card) => <ListCard cardData={card} />)}
        </Box>
        <Button size="small" type="button" className={classes.addAnotherCardButton}>
          + Add another card
        </Button>
      </Paper>
    </>
  );
};

export default BoardList;
