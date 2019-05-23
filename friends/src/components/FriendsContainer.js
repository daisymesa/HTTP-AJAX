import React from 'react';
import Friends from './Friends'

const FriendsContainer = (props) => {

    return (        
        <div className="friends-container-section">
            <h1>This is the Friends Container Component</h1>

            {props.friends.map(item => {
                return <Friends individualFriend={item} />
            })}

        </div>
    );
};

export default FriendsContainer;