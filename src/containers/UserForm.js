import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from "../components/Form/Form.js";
import { addUser } from "../actions/userActions.js";

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user))
});

const mapStateToProps = state => {
    const { users: { loading, error } } = state;
    return { loading, error };
};

class UserForm extends Component {
    render() {
        const { addUser, loading, error } = this.props;
        return (
            <Form
                title="Add user"
                fields={["name", "email"]}
                onSubmit={addUser}
                submitText={"Submit"}
                loading={loading}
                error={error}
            />
       );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);