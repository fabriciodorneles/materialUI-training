import React, { useState } from 'react';
import {useQuery, gql, NetworkStatus, useLazyQuery, useMutation} from '@apollo/client';

const GET_TODOS = gql`
  {
    todos {
      id
      type
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;

function Todos() {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [updateTodo] = useMutation(UPDATE_TODO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data);
  return data.todos.map(({ id, type }) => {
    let input;

    return (
      <div key={id}>
        <p>{type}</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateTodo({ variables: { id, type: input.value } });
            input.value = "";
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Update Todo</button>
        </form>
      </div>
    );
  });
}

function AddTodo() {
  let input;
  const [addTodo, {data}] = useMutation(ADD_TODO);

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        addTodo({ variables: {type: input.value }});
        input.value = '';
      }}>
        <input 
          ref={node => {
            input=node
          }}
        />
        <button type="submit" >Add Todo</button>
      </form>
    </div>
  );
}

function App() {
return (
  <> 
  <AddTodo></AddTodo>
  <Todos></Todos>
  </>
);
}

export default App;