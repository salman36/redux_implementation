// todosReducer.js
const todosReducer = (state = { data: null, loading: false, error: null }, action) => {
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_TODOS_SUCCESS':
        return { ...state, data: action.payload, loading: false, error: null };
      case 'FETCH_TODOS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default todosReducer;
  