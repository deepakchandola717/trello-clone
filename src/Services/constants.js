const endPoints = {
  myBoards: '/1/members/me/boards',
  singleBoard: '/1/boards/{boardId}',
  listsOnBoard: '/1/boards/{boardId}/lists',
  cardsOnList: '/1/lists/{listId}/cards',
  cardChecklist: '/1/cards/{cardId}/checklists',
  checklistCheckItems: ' /1/checklists/{checklistId}/checkItems',
  newCard: '/1/cards',
  cardCheckItemUpdate: '/1/cards/{cardId}/checkItem/{checkItemId}',
  createChecklistCheckItem: '/1/checklists/{checklistId}/checkItems'
};

export default endPoints;
