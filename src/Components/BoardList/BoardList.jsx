/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Paper, Typography, Button, Box, CardContent,
} from '@material-ui/core';
import ListCard from './ListCard';
import useStyles from './BoardList.styles';
import { getCardsOnList } from '../../Services/services';
import CardDialog from '../CardDialog/CardDialog';

const BoardList = (props) => {
  const { listData } = props;
  const classes = useStyles();
  const [listCards, setListCards] = useState([]);
  const [cardOpen, setCardOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState();

  const getCardsForList = (listId) => {
    getCardsOnList(listId)
      .then((res) => {
        setListCards(res);
      });
  };

  useEffect(() => {
    getCardsForList(listData.id);
  }, []);

  const openCard = (cardData) =>{
    console.log('opencard clidked')
    setSelectedCardData(cardData);
    console.log(cardData, cardOpen)
    setCardOpen(true)
  }


  return (
    <>
      <Paper variant="outlined" className={classes.listStyle}>
        <Typography className={classes.listName}>
          {listData && listData.name}
        </Typography>
        <Box maxHeight="67vh" overflow="auto">
          {listCards.map((card) => <div onClick={()=>openCard(card)}><ListCard cardData={card} key={card.id}/></div>)}
        </Box>
        <Button size="small" type="button" className={classes.addAnotherCardButton}>
          {listCards.length === 0 ? '+Add a card' : '+ Add another card'}
        </Button>
      </Paper>
      
      {selectedCardData&&<CardDialog cardData = {selectedCardData} cardOpen={cardOpen} setCardOpen={setCardOpen} />}
    </>
  );
};

export default BoardList;
