import {restAPI} from '../restAPI/restAPI';


const baseUrl = '/users';
export const graphservice = {
    getGraphData
}

function getGraphData(){
    return restAPI.get(baseUrl);
}