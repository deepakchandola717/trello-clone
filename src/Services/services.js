import endPoints from './constants';
import crudData from '../Utils/apiService';

// get all my boards
export const getMyBoards = () => new Promise((resolve, reject) => {
  crudData(endPoints.myBoards, 'GET')
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// get all my cards
export const getMyCards = () => new Promise((resolve, reject) => {
  crudData(endPoints.myBoards, 'GET')
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});
