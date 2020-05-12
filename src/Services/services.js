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
  crudData(endPoints.singleBoard, 'GET', { id: boardId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// get lists on a board
export const getListsOnBoard = (boardId) => new Promise((resolve, reject) => {
  crudData(endPoints.listsOnBoard, 'GET', { id: boardId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// get cards on a list
export const getCardsOnList = (boardId) => new Promise((resolve, reject) => {
  crudData(endPoints.cardsOnList, 'GET', { id: boardId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});
