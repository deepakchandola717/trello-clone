import { endPoints } from "./constants";
import { crudData } from "../Utils/apiService";

// get all my boards
export const getMyBoards = () =>{
    return new Promise((resolve, reject)=>{
        crudData(endPoints.getMyBoards, "GET")
            .then(res=>res&&resolve(res))
            .catch(err=>reject(err))
    })
}