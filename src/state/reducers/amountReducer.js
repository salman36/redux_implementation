 const reducer = (state = 0, action) =>{
    if(action.type === 'DEPOSIT'){
        return state + action.payload;

    }
    else if(action.type==='WITHDRAW') {
        // return state - action.payload;
        return state > 0 ? state - action.payload : state;
    }
    else{
        return state;
    }
    
}

export default reducer;