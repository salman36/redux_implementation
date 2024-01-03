import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./state/action-creators";

const Cart = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    // Fetch a single todo when the component mounts
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="container mt-5" style={{backgroundColor:"ButtonHighlight"}}>
      <h2 className="mb-4">Todos</h2>
      {todos.loading && <p>Loading...</p>}
      {todos.error && <p>Error: {todos.error}</p>}
      {todos.data && (
        <ul className="list-group" >
          {todos.data.map((todo) => (
            <li key={todo.id} className="list-group-item" style={{backgroundColor:"#bfd8ed",borderBlockColor:"Highlight"}}>
                <div className="d-flex justify-content-between align-items-center"></div>
              <h5 className="mb-0">User ID: {todo.userId}</h5>
              <small className="mb-0">ID: {todo.id}</small>
              <p className="mb-0">Title: {todo.title}</p>
              <p className="mb-0">Completed: {todo.completed ? "Yes" : "No"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
