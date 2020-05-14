import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Grid, Button, FormControl, InputBase, Box, FormLabel, FormControlLabel, FormGroup, Checkbox } from '@material-ui/core';
import { getCardChecklists, updateCardCheckItem, createChecklistCheckItem } from "../../Services/services";
import CloseIcon from '@material-ui/icons/Close';

import useStyles from "./CardDialog.styles";
import { useEffect } from 'react';

const CardDialog = (props) => {
    const { cardData, cardOpen, setCardOpen } = props;
    const [cardChecklists, setCardChecklists] = useState([])
    const [addingItemToChecklist, setAddingItemToChecklist] =useState(false);
    const [currentlyUpdatingChecklist, setCurrentlyUpdatingChecklist] = useState();
    const [newAdditionItem, setNewAdditionItem] = useState('');
    const getChecklistsForCard=(cardId)=>{
        getCardChecklists(cardId)
            .then(res=>{
                console.log('res of checklist', res)
                setCardChecklists(res)});
    }

    useEffect(()=>{
        getChecklistsForCard(cardData.id);
    },[])

    const markChecklistItem=(cardId, itemId, completionState)=>{
        updateCardCheckItem(cardId, itemId, {state:completionState})
            .then(res=>console.log('mark complete response', res))
            .then(()=>getChecklistsForCard(cardId))
    }

    const createChecklistItem=(checklistId, name)=>{
        createChecklistCheckItem(checklistId, name)
            .then(()=>setNewAdditionItem(''))
            .then(()=>getChecklistsForCard(cardData.id))
    }

    const checklistNewAdditionState=(addingState, checklistId=undefined )=>{
        setNewAdditionItem('')
        setAddingItemToChecklist(addingState);
        checklistId&&setCurrentlyUpdatingChecklist(checklistId);
    }

    const handleNewAddItem=(e)=>{
        setNewAdditionItem(e.target.value);
    }

    const classes = useStyles();
    return ( 
        <>
        <Dialog
            open={cardOpen}
            onClose={()=>setCardOpen(false)}
            scroll={'paper'}
            maxWidth="lg"
        >
            <DialogTitle>
                <Typography className={classes.cardTitleStyle}>{cardData&&cardData.name}</Typography>
                {/* <Typography variant="subtitle2">in list </Typography> */}
            </DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item xs ={9}>
                        {/* <Typography>Checklist</Typography> */}
                        <FormControl>
                            {cardChecklists.map((checklist)=>
                            <>
                                <FormLabel>
                                    {checklist.name}
                                </FormLabel>
                                {checklist.checkItems.map((checkItem)=>
                                    <>
                                    <FormGroup>
                                    <FormControlLabel
                                    control={<Checkbox checked={(checkItem.state==='complete')} onChange={()=>markChecklistItem(cardData.id, checkItem.id, (checkItem.state==='complete')?'incomplete':'complete')}/>}
                                    label = {checkItem.name}
                                    style={{textDecoration:checkItem.state==='complete'?'line-through':'none'}}
                                    />
                                </FormGroup>
                                    </>)}
                                    {addingItemToChecklist&&currentlyUpdatingChecklist===checklist.id?<Box>
                                        {/* <form> */}
                            {/* <FormControl> */}
                                {/* <FormGroup> */}
                                <InputBase fullWidth={true} className={classes.checklistItemInput} placeholder="Add an item" onChange={handleNewAddItem} value={newAdditionItem}/>
                                <Button onClick={()=>createChecklistItem(checklist.id, newAdditionItem)}>Add</Button>
                                <CloseIcon onClick={()=>checklistNewAdditionState(false)}/>
                                {/* </FormGroup> */}
                            {/* </FormControl> */}
                            {/* </form> */}
                        </Box> :<Button onClick={()=>checklistNewAdditionState(true,checklist.id)}>Add an item</Button>}
                                </>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>Add to Card</Typography>
                        <Typography>Checklist</Typography>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
        </>
     );
}
 
export default CardDialog;