import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  listStyle: {
    height: 'fit-content',
    width: '17rem',
    backgroundColor: '#EBECF0',
    margin: 5,
    overflow: 'scroll',
  },
  listName: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '20px',
    textAlign: 'start',
    padding: '0.5rem 1rem',
  },
  linkStyle: {
    textDecoration: 'none',
  },
  listCardStyle: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    textAlign: 'start',
    margin: '0.3rem',
  },
  addAnotherCardButton: {
    margin: '0.5rem',
    fontSize: '14px',
    color: '#5e6c84',
    textTransform: 'none',
    width: '80%',
    justifyContent: 'start',
    padding: '0.2rem 1rem',
  },
}));

export default useStyles;
