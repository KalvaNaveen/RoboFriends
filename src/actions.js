import * as constants from './Constants';

export const setSearchField=(text)=>({
    type:constants.CHANGE_SEARCH_FIELD,
    payload:text
})


export const requestUsersAction=()=>(dispatch)=>{
    dispatch({type:constants.REQUEST_USERS_PENDING,isPending:true});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {return response.json()})
        .then(data => dispatch({type:constants.REQUEST_USERS_SUCCESS,payload:data,isPending:false}))
        .catch(error => dispatch({type:constants.REQUEST_USERS_FAILED,payload:error,isPending:false}))

}