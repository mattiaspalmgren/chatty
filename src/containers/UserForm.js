import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from "../components/Form/Form.js";
import { addUser } from "../actions/userActions.js";

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user))
});

const mapStateToProps = state => {
    const { status } = state;
    return { status };
};

class UserForm extends Component {
    render() {
        const { addUser } = this.props;
        return (
            <Form
                title="Add user"
                fields={["name", "email"]}
                onSubmit={addUser}
                submitText={"Submit"}
            />
       );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);