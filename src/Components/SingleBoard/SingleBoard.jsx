import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import BoardBar from './BoardBar';
import BoardList from '../BoardList/BoardList';

const SingleBoard = () => {
  const [boardLists, setBoardLists] = useState([]);
  return (
    <>
      <BoardBar />
      <Box width="100vw" overflow="scroll">
        <Box display="flex" width="fit-content">
          {boardLists.map((list) => <BoardList />)}
        </Box>
      </Box>

    </>
  );
};

export default SingleBoard;
