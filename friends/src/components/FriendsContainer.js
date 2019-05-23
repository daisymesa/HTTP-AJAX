import React from 'react';
import Friends from './Friends'

const FriendsContainer = (props) => {

    return (        
        <div className="friends-container-section">
            <h1>Lambda Friends</h1>

            {props.friends.map(item => {
                return <Friends individualFriend={item} />
            })}

        </div>
    );
};

export default FriendsContainer;