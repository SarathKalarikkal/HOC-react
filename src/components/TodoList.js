import React from "react"
import HOC from "../HOC"

function TodoList({ data }) {
  return (
    <div className="content">
        {data && data.slice(1,12).map((todo) => {
            return <p key={todo.id}>{todo.title}</p>
        })}
    </div>
  )
}

const SearchTodos = HOC(TodoList, "Todos")

export default SearchTodos
