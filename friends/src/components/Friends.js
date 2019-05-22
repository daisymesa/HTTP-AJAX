import React from 'react'

const Friends = (props) => {
    return (
        <div>
            <h1>Friend List</h1>
            <h2>{props.friends.name}</h2>
            <h3>{props.friends.age}</h3>
            <h3>{props.friends.email}</h3>
   
        </div>
    )
}

export default Friends;