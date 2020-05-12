import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  trelloLogo: {
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
    },
    height: '1.8rem',
    cursor: 'pointer',
  },

}));

export default useStyles;
