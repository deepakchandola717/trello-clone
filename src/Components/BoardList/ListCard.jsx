import React from 'react';
import { Card, CardContent } from '@material-ui/core';

import useStyles from './BoardList.styles';

const ListCard = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.listCardStyle}>
        <CardContent>
          This is card desc
        </CardContent>
      </Card>
    </>
  );
};

export default ListCard;
