import React, { Component } from 'react'

class NewFriendForm extends Component {
    state = {
        friend: this.props.newFriend || {
            name: '',
            age: '',
            email: ''
        }
    }



    render() {
        return (
            <div className="form-container">

                <h1>Make New Friends!</h1>

                <form onSumbit={this.handleSubmit}>

                    <input className="input-field"
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        placeholder="Name"
                        value={this.state.friend.name}
                    />

                    <input className="input-field"
                        type="text"
                        name="age"
                        onChange={this.changeHandler}
                        placeholder="Age"
                        value={this.state.friend.age}
                    />

                    <input className="input-field"
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        placeholder="Email"
                        value={this.state.friend.age}
                    />

                </form>
            </div>
        )
    }
}

export default NewFriendForm;