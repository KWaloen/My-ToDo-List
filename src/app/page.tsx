//use client is necessary for NextJS to not throw a hissy fit
"use client"

import { useState } from "react"



export default function Home() {
  
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState<{ id: number; title: string; completed: boolean; }[]>([])

  function handleSubmit(item: React.FormEvent<HTMLFormElement>) {
    //prevents refreshing the page after clicking the button
    item.preventDefault();

    setTodos((currentTodos) => {
      return [
      ...currentTodos, 
      {id: currentTodos.length, title: newItem, completed: false},
      ]
    })
  }
  
  console.log(todos)

  return (
    //upon clicking the button, the onSubmit event listener triggers the handleSubmit method
    <div> 
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
          value={newItem}
          //this allows the text field to be updated 
          onChange={item => setNewItem(item.target.value)} 
          type="text" 
          id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>

      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>

      </ul>
    </div>
  )
}
