import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from "../components/User/User.js";
import InputForm from "../components/InputForm/InputForm.js";
import { addUser } from "../actions/index.js";

const mapStateToProps = state => {
    const { users } = state;
    return { users };
}

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user))
})

class UserContainer extends Component {
    render() {
        const { addUser, users } = this.props;
        return (
            <div>
                <InputForm title="Add user" fields={["name", "email"]} onSubmit={addUser} />
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
       );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer);