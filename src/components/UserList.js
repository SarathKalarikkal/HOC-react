import React from "react"
import HOC from "../HOC"

function UserList({data}) {


  return (
    <div  className="content">
        {data && data.map((user)=>{
            return <p key={user.id}>{user.name}</p>
        })}
    </div>
  )
}

const SearchUser = HOC(UserList, "Users")

export default SearchUser
