/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography } from '@material-ui/core';

const BoardBar = (props) => {
  const { boardData } = props;
  return (
    <>
      <Box display="flex" position="relative" width="100vw" height="2rem" alignItems="center" style={{ backgroundColor: boardData && boardData.prefs.backgroundColor }}>
        <Typography style={{
          margin: '2rem', fontSize: '18px', fontWeight: '700', lineHeight: '32px', color: '#fff',
        }}
        >
          {boardData && boardData.name}
        </Typography>
      </Box>
    </>
  );
};

export default BoardBar;
