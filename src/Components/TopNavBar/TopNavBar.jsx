import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import useStyles from './TopNavBar.styles';
import TrelloLogo from '../../Assets/header-logo-2x.01ef898811a879595cea.png';

const TopNavBar = () => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" width="100vw" height="2rem" justifyContent="center" style={{ backgroundColor: '#026AAe' }}>
        <Link to="/boards">
        <img className={classes.trelloLogo} src={TrelloLogo} alt="Trello logo" />
        </Link>
      </Box>
    </>
  );
};

export default TopNavBar;
