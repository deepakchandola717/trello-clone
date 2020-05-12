import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  pageContainer: {
    display: 'flex',
  },
  board: {
    width: 195,
    height: 100,
    marginRight: 16,
    marginBottom: 16,
  },
  allBoardsContainer: {
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 550,
    overflow: 'scroll',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  sideMenuItem: {
    display: 'flex',
    minWidth: '15rem',
    margin: '1rem',
    borderRadius: '4px',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#E4F0F6',
    color: '#0079BF',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '700',
  },
  sideMenuLogo: {
    height: '1rem',
    margin: '10px',
  },
  boardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  boardsHeader: {
    color: '#172b4d',
    fontSize: '16px',
    fontWeight: '700',
    margin: 8,
  },
  boardTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
  },
}));

export default useStyles;
