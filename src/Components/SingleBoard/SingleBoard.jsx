/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import BoardBar from './BoardBar';
import BoardList from '../BoardList/BoardList';
import { getSingleBoard, getListsOnBoard } from '../../Services/services';

const SingleBoard = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [currentBoardId] = useState(props.match.params.boardId);
  const [boardData, setBoardData] = useState();
  const [boardLists, setBoardLists] = useState([]);

  const getBoardData = (boardId) => {
    getSingleBoard(boardId)
      .then((res) => {
        console.log('board data', res);
        setBoardData(res);
      })
      .catch((err) => console.log(err));
  };

  const getBoardLists = (boardId) => {
    getListsOnBoard(boardId)
      .then((res) => {
        console.log('lists', res);
        setBoardLists(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBoardData(currentBoardId);
    getBoardLists(currentBoardId);
  }, []);

  return (
    <>
      <BoardBar boardData={boardData} />
      <Box width="100vw" height="90vh" overflow="scroll" style={{ backgroundColor: boardData && boardData.prefs.backgroundColor }}>
        <Box display="flex" width="fit-content">
          {boardLists.map((list) => <BoardList listData={list} />)}
        </Box>
      </Box>

    </>
  );
};

export default SingleBoard;
