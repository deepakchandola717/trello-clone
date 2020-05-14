import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardTitleStyle:{
      fontSize:'20px',
      fontWeight: '600',
      color:'#172b4d',
      lineHeight:'24px',
    //   '&::before':{
    //     content: '"\E910"',
    //     display:'inline'
    //   },
  },
  checklistItemInput:{
      border:'solid #0079bf 1px',
      padding:'8px 12px',
      borderRadius:'3px',
      color:'black'
  }
}));

export default useStyles;
