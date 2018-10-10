import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from "../components/List/List";

const mapStateToProps = state => {
    const { users: { users } } = state;
    return { users };
};

class UserList extends Component {
    render() {
        const { users } = this.props;
        const items = users.map(user => ({ id: user.id, title: user.name, fields: [user.email]}));
        return (
            <div>
                <List items={items}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(UserList);