/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardContent } from '@material-ui/core';

import useStyles from './BoardList.styles';

const ListCard = (props) => {
  const { cardData } = props;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.listCardStyle}>
        <CardContent>
          {cardData && cardData.name}
        </CardContent>
      </Card>
    </>
  );
};

export default ListCard;
