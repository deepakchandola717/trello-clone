import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './SingleBoard.styles';

const BoardBar = (props) => {
  const { boardColor } = props;
  return (
    <>
      <Box display="flex" position="relative" top="-2rem" width="100vw" height="2rem" alignItems="center" style={{ backgroundColor: '#41AFCC' }}>
        <Typography style={{
          margin: '2rem', fontSize: '18px', fontWeight: '700', lineHeight: '32px', color: '#fff',
        }}
        >
          Board Name
        </Typography>
      </Box>
    </>
  );
};

export default BoardBar;
