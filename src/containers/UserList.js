import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from "../components/User/User.js";

const mapStateToProps = state => {
    const { users } = state;
    return { users };
}

class UserList extends Component {
    render() {
        const { users } = this.props;
        return (
            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
       );
    }
}

export default connect(
    mapStateToProps,
)(UserList);