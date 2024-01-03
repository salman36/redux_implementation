import axios from "axios"

export const depositMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type: 'DEPOSIT',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    return (dispatch) => {
        dispatch({
            type: 'WITHDRAW',
            payload: amount
        })
    }
}


export const fetchTodos = () => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_TODOS_REQUEST' });
  
      axios.get('https://jsonplaceholder.typicode.com/todos') // Fetch a single todo for demonstration
        .then((response) => {
          dispatch({
            type: 'FETCH_TODOS_SUCCESS',
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: 'FETCH_TODOS_FAILURE',
            payload: error.message,
          });
        });
    };
  };

