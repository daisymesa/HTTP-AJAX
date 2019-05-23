import React from 'react'

const Friends = (props) => {
    return (
        <div>
            <h1>This is the Friends Component</h1>

            <h2>{props.individualFriend.name}</h2>
            <h3>{props.individualFriend.age}</h3>
            <h3>{props.individualFriend.email}</h3>
   
        </div>
    )
}

export default Friends;