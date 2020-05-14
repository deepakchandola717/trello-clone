/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import BoardBar from './BoardBar';
import BoardList from '../BoardList/BoardList';
import { getSingleBoard, getListsOnBoard } from '../../Services/services';
import CardDialog from '../CardDialog/CardDialog';

const SingleBoard = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [currentBoardId] = useState(props.match.params.boardId);
  const [boardData, setBoardData] = useState();
  const [boardLists, setBoardLists] = useState([]);

  const getBoardData = (boardId) => {
    getSingleBoard(boardId)
      .then((res) => {
        setBoardData(res);
      })
      .catch((err) => console.log(err));
  };

  const getBoardLists = (boardId) => {
    getListsOnBoard(boardId)
      .then((res) => {
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
          {boardLists.map((list) => <BoardList listData={list} key={list.id}/>)}
        </Box>
      </Box>
    </>
  );
};

export default SingleBoard;
