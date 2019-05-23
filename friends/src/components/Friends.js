import React from 'react'

const Friends = (props) => {
    return (
        <div className="friend-card">

            <h2>Name: {props.individualFriend.name}</h2>
            <h3>Age: {props.individualFriend.age}</h3>
            <h3>Email: {props.individualFriend.email}</h3>
   
        </div>
    )
}

export default Friends;