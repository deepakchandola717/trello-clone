import endPoints from './constants';
import crudData from '../Utils/apiService';

// get all my boards
export const getMyBoards = () => new Promise((resolve, reject) => {
  crudData(endPoints.myBoards, 'GET')
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// get single board
export const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  crudData(endPoints.singleBoard, 'GET', { boardId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// get lists on a board
export const getListsOnBoard = (boardId) => new Promise((resolve, reject) => {
  crudData(endPoints.listsOnBoard, 'GET', { boardId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// get cards on a list
export const getCardsOnList = (listId) => new Promise((resolve, reject) => {
  crudData(endPoints.cardsOnList, 'GET', { listId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// get checklists on a card
export const getCardChecklists = (cardId) => new Promise((resolve, reject) => {
  crudData(endPoints.cardChecklist, 'GET', { cardId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// get Checklist checkitems
export const getChecklistCheckitems = (checklistId) => new Promise((resolve, reject) => {
  crudData(endPoints.cardChecklist, 'GET', { checklistId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});


// update card checkitems state
export const updateCardCheckItem = (cardId, checkItemId, updateObject) => new Promise((resolve, reject) => {
  crudData(endPoints.cardCheckItemUpdate, 'PUT', { cardId, checkItemId }, updateObject)
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// update card checkitems state
export const createChecklistCheckItem = (checklistId, name) => new Promise((resolve, reject) => {
  crudData(endPoints.createChecklistCheckItem, 'POST', { checklistId }, {name})
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});