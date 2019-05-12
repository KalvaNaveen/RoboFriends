import * as constants from './Constants';

const initialStateSearch={
    searchField:''
}

export const searchUsers=(state=initialStateSearch,action={})=>{
    switch(action.type){
        case constants.CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload});
        default:
         return state;
    }
}

const initialStateUsers={
    isPending:false,
    users:[],
    error:''
}
export const requestUsers=(state=initialStateUsers,action={})=>{
    switch(action.type){
        case constants.REQUEST_USERS_PENDING:
            return Object.assign({},state,{isPending:true});
        case constants.REQUEST_USERS_SUCCESS:
            return Object.assign({},state,{isPending:false,users:action.payload});
        case constants.REQUEST_USERS_FAILED:
            return Object.assign({},state,{isPending:false,error:action.payload});
        default:
         return state;
    }
}