import React, { useState, useEffect } from 'react';
import {
  Card, Box, CardContent, Typography, Container,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import { getMyBoards } from '../../Services/services';

import useStyles from './AllBoards.styles';
import TrelloBoardLogo from '../../Assets/1404909698trello-icon-300x300.png';


const AllBoards = () => {
  const classes = useStyles();
  const [allBoards, setAllBoards] = useState([]);


  const getAllBoards = () => {
    getMyBoards()
      .then((res) => {
        setAllBoards(res);
        console.log('boards', res);
      });
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  return (
    <>
      <Container maxWidth="xl" className={classes.pageContainer}>
        <Box display="flex" flexDirection="column" height="550" width="fit-content" alignItems="center">
          <Box className={classes.sideMenuItem}>
            <img className={classes.sideMenuLogo} src={TrelloBoardLogo} alt="all boards" />
            <Typography>Boards</Typography>
          </Box>
        </Box>
        <Box className={classes.allBoardsContainer}>
          <Typography className={classes.boardsHeader}>All Boards</Typography>
          <Box className={classes.boardsContainer}>
            {allBoards.map((board) => (
              <>
                <Link to={`/boards/${board.id}`} className={classes.linkStyle}>
                  <Card
                    className={classes.board}
                    style={{
                      backgroundColor: board.prefs.backgroundColor,
                      backgroundImage: `url(${board.prefs.backgroundImage})`,
                    }}
                  >
                    <CardContent>
                      <Typography className={classes.boardTitle}>
                        {board.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AllBoards;
