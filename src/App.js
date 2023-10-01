import React from 'react';

const todoList = [
  { 
    id: 1, 
    title: "Complete assignment",
    assignment_number: "_1_1"
  },
  { 
    id: 2, 
    title: "Git push assignment",
    assignment_number: "_1_1" 
  },
  { 
    id: 3, 
    title: "Merge assignment",
    assignment_number: "_1_1" 
  },
];

function App() {
  return (
    <div>
      <h1>ToDo List</h1>
      <label htmlFor='search'>Search: </label>
        <input id='search' type='text'></input>
      
      <hr />
      {/* render the list */}
      <ul>
        {todoList.map(function(item) {
          return (
            <li key={item.id}>
              <span>
                { item.title }
              </span>
              <span>
                { item.assignment_number }
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
